<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\FeatureProduct;
use App\Models\Feature;
use App\Models\Stock;
use App\Models\StockMovement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductsController extends Controller
{
   
    public function index()
    {
        $products = Product::with(['category', 'featureProducts.feature'])->get();
        if (!$products) {
            return response()->json(['error' => 'Product not found'], 404);
        }
        else{
            return response()->json([
                'status' => true,
                'data' => $products
        ],200);
        }
        
    }

    public function customList()
    {
        $products = Product::with(['category', 'stocks'])->get();
        if (!$products) {
            return response()->json(['error' => 'Product not found'], 404);
        }
        else{
            return response()->json([
                'status' => true,
                'data' => $products
        ],200);
        }
        
    }


    public function create()
    {
        //
    }

 
    public function store(Request $request)
    {
        $rules =  [
            'name' => 'required|string|max:60',
            'category_id' => 'required',
            'description' => 'string|max:150',
            'sku' => 'string|unique:products,sku',
            'price' =>'numeric',
            'status' => 'boolean'
        ];
        $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute :attribute is required']);

        if ($validator->fails()){
            return response()->json($validator->errors());
        }
        $this->validateFeatures($request->features);
        $this->validateStock($request->stock);

        $product = Product::create($request->all());
        try{
           if($product){
             //creando caracteristicas 
             $features = $this->createFeatures($request->features, $product->id);
             //creando su stock inicial
             $stocks = $this->createStock($request->stock, $product->id);
             $this->createMovement($stocks);
           }

        }catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }


        return response()->json([
            'status' => true,
            'message' => 'Product created successfully',
            'product' => $product,
            'features' => $features,
            'stocks' => $stocks
         ],201);
    }

    public function newProduct(Request $request)
    {
        $rules =  [
            'name' => 'required|string|max:60',
            'category_id' => 'required',
            'description' => 'string|max:150',
            'sku' => 'string|unique:products,sku',
            'price' =>'numeric',
            'status' => 'boolean'
        ];
        $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute :attribute is required']);

        if ($validator->fails()){
            return response()->json($validator->errors());
        }
        $product = Product::create($request->all());
        return response()->json([
            'status' => true,
            'message' => 'Product created successfully',
            'product' => $product,
         ],201);
    }

 
    public function show(string $id)
    {

        //$products = Product::with(['category'])->where('id', $id)->first();
        $products = Product::with(['category', 'featureProducts.feature','stocks.branch'])->where('id', $id)->first();
        
        return response()->json([
            'data' => $products
        ],200);
        
    }

  
    public function edit(Product $product)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        $product = Product::where('id', $id)->first();
        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }
        else{
            $rules =  [
                'name' => 'required|string|max:60',
                'description' => 'string|max:150',
                'sku' => 'string',
                'price' =>'numeric',
                'status' => 'boolean'
            ];
            $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute is required']);
    
            if($validator->fails()){
                return response()->json([
                   'status' => false,
                   'message' => 'errors',
                   'errors' => $validator->errors()->all()
                ],400);
            }

        
            $product->update($request->all());

    
            return response()->json([
                'status' => true,
                'message' => 'product updated successfully',
                'data' => $product
            ],200);
        }
    
    }
  
  /*  public function update(Request $request, string $id)
    {
        $product = Product::where('id', $id)->first();
        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }
        else{
            $rules =  [
                'name' => 'required|string|max:60',
                'description' => 'string|max:150',
                'sku' => 'string',
                'price' =>'decimal',
                'status' => 'boolean'
            ];
            $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute is required']);
    
            if($validator->fails()){
                return response()->json([
                   'status' => false,
                   'message' => 'errors',
                   'errors' => $validator->errors()->all()
                ],400);
            }

            

            
            try{
               if($product){

             
                $this->validateFeatures($request->features);
                $this->validateStock($request->stock);
                $product->update($request->all());

                $this->updateFeatures($request->features);
                $this->updateStock($request->stock);

                 return response()->json([
                    'status' => true,
                    'message' => 'product updated successfully',
                    'data' => $product
                 ],200);

               }
    
            }catch(\Exception $e) {
                return response()->json(['error' => $e->getMessage()], 400);
            }
    
        }

    
    }*/

   
    public function destroy(string $id)
    {
        $product = Product::where('id', $id)->first();
        $product->delete();
        return response()->json([
            'status' => true,
            'message' => 'Product deleted successfully',
         ],200);
    }


    /**
     * Features functions
     */

     public function validateFeatures(array $features){

        foreach ($features as $feature) {
            $rules =  [
                'feature_id' => 'required',
                'value' => 'required|string',
                'description' => 'string|max:60',
            ];

            $validator = Validator::make($feature, $rules, ['required' => 'the attribute :the attribute is required']);

            if ($validator->fails()){
                throw new \Exception($validator->errors());
            }
        }
        
    }

    public function  createFeatures(array $features, string $id){
        
        $saved_features = [];
        foreach ($features as $feature) {

            $new_feature = FeatureProduct::create([
                'product_id' => $id,
                'feature_id' => $feature['feature_id'],
                'value' => $feature['value'],
                'description' => $feature['description'],
            ]);

            array_push($saved_features, $new_feature);
        }
        return $saved_features;

    }

    public function  updateFeatures(array $features){
        
        $saved_features = [];
        foreach ($features as $feature) {

            $update_feature = FeatureProduct::where('id', $feature['id'])->first();
            $update_feature->value = $feature['value'];
            $update_feature->description = $feature['description'];
            $update_feature->save();

      
        }
        return;
    }

    /**
     * Stock functions
     */

     public function validateStock(array $stock){

        foreach ($stock as $item) {
            $rules =  [
                'branch_id' => 'required',
                'quantity_available' => 'required|numeric',
                'minimum_quantity' => 'required|numeric',
            ];

            $validator = Validator::make($item, $rules, ['required' => 'the attribute :the attribute is required']);

            if ($validator->fails()){
                throw new \Exception($validator->errors());
            }
        }
        
    }

    public function  createStock(array $stock, string $product_id){
        
        $saved_stock = [];
        foreach ($stock as $item) {

            $new_stock = Stock::create([
                'product_id' => $product_id,
                'branch_id' => $item['branch_id'],
                'quantity_available' => $item['quantity_available'],
                'minimum_quantity' => $item['minimum_quantity'],
            ]);

            array_push($saved_stock, $new_stock);
        }
        return $saved_stock;

    }

    public function  updateStock(array $stock){
        
        foreach ($stock as $item) {

            $update_stock = Stock::where('id', $stock['id'])->first();
            $update_stock->quantity_available = $stock['quantity_available'];
            $update_stock->minimum_quantity = $stock['minimum_quantity'];
            $update_stock->save();
  
        }
        return;
    }
     
    /**
     * Movement stock
     */
    public function createMovement(array $stocks)
    {
        
        foreach ($stocks as $stock) {
            $movement = StockMovement::create([
                'user_id' =>  auth()->id(),
                'stock_id' => $stock->id,
                'type' => 'entry',
                'quantity' => $stock->quantity_available
                
            ]);
         }

         return;
    }

    public function searchByStock(string $id){
        $list = Stock::with('branch')->where('product_id', $id)->get();
        return response()->json([
            'status' => true,
            'data' => $list,
         ],200);
    }

}
