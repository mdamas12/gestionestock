<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Models\SaleDetail;
use App\Models\stockSale;  
use App\Models\StockMovement;  
use App\Models\Stock;  
use App\Models\Taxe_sale; 

use Illuminate\Support\Facades\Notification;
use App\Notifications\ProductLowStock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
class SaleController extends Controller
{
    
    public function listSales()
    {
        $sales = Sale::with('customer', 'user', 'detailSale.product.category')->get();
        return response()->json([
            'data' => $sales
         ],200);
    }

    public function listSalesbyCustomer(string $customer_uuid){

        $sales = Sale::where('customer_id', $customer_uuid)->get();
        return response()->json([
            'data' => $sales
         ],200);

    }

    public function listSalesbyUser(){
        $user = Auth::user();
        $sales = Sale::with('customer', 'user', 'detailSale.product.category')->where('user_id', $user->id)->get();
        return response()->json([
            'data' => $sales
         ],200);

    }

    public function listSalesbyDate(date $date){

        $sales = Sale::where('created_at', $date)->get();
        return response()->json([
            'data' => $sales
         ],200);

    }
    
    public function showSale(string $uuid){
    
        $sale = Sale::where('uuid', $uuid)->first();
        return response()->json([
            'data' => $sale
         ],200); 
    }

 

    public function createSale(Request $request)
    {
        
        $rules =  [
            'date' => 'required',
            'seller' => 'required',
            'customer' => 'required',
            'amount' => 'required|numeric|min:0', 
            'status' => 'required|in:pending,partial,completed',
        ];

        $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute is required']);

        if ($validator->fails()){
            return response()->json($validator->errors());
        }
      
        try{

            $this->ValidateDetailSale($request->details);  

            $date = Carbon::createFromFormat('d-m-Y', $request->date)->format('Y-m-d');
            $sale = Sale::create([
                'user_id' => $request->seller,
                'customer_id' => $request->customer,
                'date' => $date,
                'total_amount' => $request->amount,
                'taxes_amount' => $request->taxes_amount,
                'payment_status' => $request->status,
            ]);

            if(!$sale){
                throw new \Exception('error trying to create sale'); 
            }
            else{
              

              $saved_details = $this->createDetailSale($request->details, $sale->id);

              $taxes = $this->saveTaxesBySale($request->taxes, $sale->id);
            }
        }catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
       
        return response()->json([
            'status' => true,
            'message' => 'Sale created successfully',
            'data_sale' => $sale,
            'details_sale' => $saved_details
         ],201);
    }



    public function updateSale(Request $request, string $uuid)
    {
        $sale = Sale::where('uuid', $uuid)->first();
        
        $rules =  [
            'user_id' => 'required|uuid',
            'customer_id' => 'required|uuid',
            'total_amount' => 'required|decimal', 
            'taxes_amount' => 'required|decimal',
            'payment_status' => 'required|in:pending,partial,completed',
        ];
        $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute is required']);

        if ($validator->fails()){
            return response()->json($validator->errors());
        }
        try{
            $sale->user_id = $request->user_id;
            $sale->customer_id = $request->customer_id;
            $sale->total_amount = $request->total_amount;
            $sale->taxes_amount = $request->taxes_amount;
            $sale->payment_status = $request->payment_status;
            $sale->save();
            
            $this->ValidateDetailSale($request->details);
            
            $updated_detail = $this->updateDetailSale($request->details, $uuid);

        }catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }

        return response()->json([
            'status' => true,
            'message' => 'Sale updated successfully',
            'data_sale' => $sale,
            'details_sale' => $updated_detail,
         ],200);
    }

    public function ValidateDetailSale(array $details){

        foreach ($details as $detail) {
            $rules =  [
                'id' => 'required',
                'quantity' => 'required|numeric',
                'amount' => 'required|numeric',
            ];

            $validator = Validator::make($detail, $rules, ['required' => 'the attribute :the attribute is required']);

            if ($validator->fails()){
                throw new \Exception($validator->errors());
            }
        }
        
    }

    public function createDetailSale(array $details, string $sale_id){
   
        $saved_details = [];
     
        foreach ($details as $detail) {

            $saved_detail = SaleDetail::create([
               
                'product_id' => $detail['id'],
                'sale_id' => $sale_id,
                'quantity' => $detail['quantity'],
                'amount' => $detail['amount'],
                'discount_percentage' => 0,
            ]);
            array_push($saved_details, $saved_detail);
            $stocks_sale = $detail['stocks'];

            foreach ($stocks_sale as $stock ){

                /** save stock by product sale  */
                $select_stock = stockSale::create([
                    'sale_detail_id' => $saved_detail->id,
                    'stock_id' => $stock['stock_id'],
                    'quantity' => $stock['quantity'],  
                ]);
                /** Update stock */
                $update_stock = Stock::where('id', $stock['stock_id'])->first();
                $update_stock->quantity_available = $update_stock->quantity_available - $stock['quantity'];
                $update_stock->save();

               if($update_stock->quantity_available > $update_stock->minimum_quantity){
                   $this->alertLowStock($update_stock->id);  
               }

                
                /** Register movements */

                $movement = StockMovement::create([
                    'user_id' =>  auth()->id(),
                    'stock_id' => $stock['stock_id'],
                    'type' => 'exit',
                    'quantity' => $stock['quantity']
                    
                ]);

            }

        }
        return $saved_details;
    }

    public function saveTaxesBySale(array $taxes, string $sale_id){
        foreach ($taxes as $taxe ){

            $movement = Taxe_sale::create([
                'sale_id' => $sale_id ,
                'taxe_id' => $taxe,    
            ]);

        }
        
        return;

    }

    public function updateDetailSale(array $details, string $uuid){

        $updated_details = [];
        foreach ($details as $detail) {
         
            $detail = SaleDetail::where('uuid',$detail['uuid'] )->first(); 
            $detail->product_id = $detail['product_id'];
            $detail->quantity = $detail['quantity'];
            $detail->amount = $detail['amount'];
            $detail->discount_percentage = $detail['discount_percentage'];
            $detail->save();

            array_push($updated_details, $detail);

        }

        return  $updated_details;

    }

    public function getStocks(string $sale_detail_id){
        $stocks_details = stockSale::with('stock.branch')->where('sale_detail_id',$sale_detail_id)->get();

        return response()->json([
            'status' => true,
            'data' => $stocks_details,
            'message' => 'sale deleted successfully',
         ],200);

    }

    public function deleteSale(string $id)
    {
        try{
          $sales_detail = SaleDetail::where('sale_id',$id)->get(); 

          foreach ($sales_detail as $detail) { 
            
            $stocksbyProducts = stockSale::where('sale_detail_id',$detail['id'] )->get();
            foreach ($stocksbyProducts as $stock) { 
                /** update stock */
                $update_stock = Stock::where('id', $stock['stock_id'])->first();
                $update_stock->quantity_available = $update_stock->quantity_available + $stock['quantity'];
                $update_stock->save();

                

                /**register movement */
                $movement = StockMovement::create([
                    'user_id' =>  auth()->id(),
                    'stock_id' => $stock['stock_id'],
                    'type' => 'entry',
                    'quantity' => $stock['quantity']
                    
                ]);
            } 

            $stocksbyProducts = stockSale::where('sale_detail_id',$detail['id'] )->delete();
        }
        $sales_detail = SaleDetail::where('sale_id',$id)->delete(); 
        $sale = Sale::where('id', $id)->delete();
      

        }catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
        return response()->json([
            'status' => true,
            'message' => 'sale deleted successfully',
         ],200);
    }

    public function alertLowStock(string $id){
      
       $email =  $valor = env('EMAIL_ALERT_NOTIFICATIONS');
        $detalle = Stock::where('id', $id)->first();
        Notification::route('mail', $email)->notify(new ProductLowStock($detalle));

       // $usuario->notify(new ProductLowStock($detalle));   
        
    }
}
