<?php

namespace App\Http\Controllers;

use App\Models\StockMovement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StockMovementController extends Controller
{

    public function index()
    {
        $movements = StockMovement::all(20);
        return response()->json([
                'status' => true,
                'data' => $movements
        ],200); 
    }
    
    public function createMovement(Request $request)
    {

        $rules =  [
            'stock_id' => 'required',
            'user_id' => 'required',
            'type' => 'required|string',
            'quantity' => 'required|decimal',
        ];
        $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute is required']);

        if ($validator->fails()){
            return response()->json($validator->errors());
        }

        try {
            //Validar existencia del producto
            $this->ValidateQuantityStock($request->stock_id, $request->quantity);
    
            $movement = StockMovement::create($request->all());
            $this->updateQuatityStock($request->stock_id, $request->quantity,$request->type );
            $this->verifyQuantityStock($request->stock_id);
           
            return response()->json([
                'status' => true,
                'message' => 'movement created successfully',
                'data' => $movement
             ],201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
     
    }

    public function UpdateMovement(Request $request, string $movement_id)
    {
       
        $movement = StockMovement::where('id', $movement_id)->first();
        
        $rules =  [
            'stock_id' => 'required',
            'user_id' => 'required',
            'type' => 'required|string',
            'quantity' => 'required|decimal',
        ];
        $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute is required']);

        if ($validator->fails()){
            return response()->json($validator->errors());
        }

        try {
            //Validar existencia del producto
            $this->ValidateQuantityStock($request->stock_id, $request->quantity);
    
            $movement = StockMovement::create($request->all());
            $this->updateQuatityStock($request->stock_id, $request->quantity,$request->type );
            $this->verifyQuantityStock($request->stock_id);

            $movement->update($request->all());
            return response()->json([
                'status' => true,
                'message' => 'movement updated successfully',
                'data' => $movement
            ],201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }


    public function destroyMovement(string $movement_id)
    {
        $movement = StockMovement::where('id', $movement_id)->first();
        $movement->delete();
        return response()->json([
            'status' => true,
            'message' => 'movement deleted successfully',
         ],200);
    }
    

    public function ValidateQuantityStock(string $stock_id, decimal $quantity){
        $stock = stock::where('id', $stock_id)->first(); 
        
        if ($stock->quantity_available < $quantity){
            throw new \Exception('Insufficient stock to carry out this output');
        }
    }

    public function updateQuatityStock(string $stock_id, decimal $quantity, string $type){
        $stock = stock::where('id', $stock_id)->first(); 

        if ($type == 'entry') {
            // Movimiento de entrada: aumentar el stock
            $stock->quantity_available += $quantity;
        } elseif ($type == 'exit') {
            // Movimiento de salida: reducir el stock
            $stock->quantity_available -= $quantity; 
        }

        $stock->save();
    }

    public function verifyQuantityStock(string $stock_id){

        $stock = stock::where('id', $stock_id)->first(); 
        
        if ($stock->quantity_available <= $stock->$minimum_quantity){
            Notification::route('mail', 'email_name@mail.com')
                        ->notify(new ProductLowStock($stock));
        }
    }
    
}
