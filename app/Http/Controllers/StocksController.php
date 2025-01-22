<?php

namespace App\Http\Controllers;

use App\Models\Stock; 
use App\Models\Stock_movement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class StocksController extends Controller
{
   

    public function listByBranch(string $uuid)
    {
        $products = Stock::where('branch_id', $uuid)->get();
        return response()->json([
            'data' => $products
         ],200);
    }


    public function listByProduct(string $uuid)
    {
        $products = Stock::where('product_id', $uuid)->get();
        return response()->json([
            'data' => $products
         ],200);
    }
    

    public function createStockByProduct(Request $request)
    {
        $rules =  [
            'branch_id' => 'required',
            'product_id' => 'required',
            'quantity_available' => 'required|numeric',
            'minimum_quantity' => 'required|numeric',
        ];
        $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute is required']);

        if ($validator->fails()){
            return response()->json($validator->errors());
        }
        $stock = Stock::create($request->all());
        try{
            if($stock){
              $type = "entry";
              $this->createMovement($stock->id, $stock->quantity_available, $type );
            }
 
         }catch(\Exception $e) {
             return response()->json(['error' => $e->getMessage()], 400);
         }
        return response()->json([
            'status' => true,
            'message' => 'Stock created successfully',
            'data' => $stock
         ],201);
    }

   

    public function updateStockByProduct(Request $request, string $stock_id)
    {
        $stock = Stock::where('id', $stock_id)->first();
        $rules =  [
            'branch_id' => 'required',
            'product_id' => 'required',
            'quantity_available' => 'required|decimal',
            'minimum_quantity' => 'required|decimal',
        ];
        $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute is required']);

        if ($validator->fails()){
            return response()->json($validator->errors());
        }
        $stock->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Stock updated successfully',
            'data' => $stock
         ],200);
    }
    
    public function updateStock(Request $request , string $stock_id){

        $stock = Stock::where('id', $stock_id)->first();
        $user = Auth::user();
        $userId = $user->id;
        $rules =  [
            'minimum_quantity' => 'required|numeric',
            'quantity' => 'required|numeric',
            'in' => 'required|boolean',
        ];
        $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute is required']);

        if ($validator->fails()){
            return response()->json($validator->errors());
        }
        if ($request->in === true){
            $stock->quantity_available = $stock->quantity_available + $request->quantity;
        }
        else{
            $stock->quantity_available = $stock->quantity_available - $request->quantity;
        }
        $stock->minimum_quantity = $request->minimum_quantity;

        $stock->update();
       

        $new_movement = Stock_movement::create([
            'stock_id' => $stock_id,
            'user_id' => $userId,
            'type' => $request->in ? 'entry' : 'exit',
            'quantity' => $request->quantity,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Stock updated successfully',
            'data' => $stock
         ],200);


    }
   
    public function destroyStockByProduct(string $stock_id)
    {
        $stock = Stock::where('id', $stock_id)->first();

        $stock->delete();
        return response()->json([
            'status' => true,
            'message' => 'stock deleted successfully',
         ],200);
    }

     /**
     * Movement stock
     */
    public function createMovement( $stock_id, $quantity_available, $type )
    {
        $user = Auth::user();
        $userId = $user->id;

   
        $movement = Stock_movement::create([
            'user_id' =>  $userId,
            'stock_id' => $stock_id,
            'type' => $type,
            'quantity' => $quantity_available
                
        ]);
         
         return;
    }
}
