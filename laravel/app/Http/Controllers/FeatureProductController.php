<?php

namespace App\Http\Controllers;

use App\Models\FeatureProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FeatureProductController extends Controller
{
    public function store(Request $request)
    {
        $rules =  [
            'product_id' => 'required',
            'feature_id' => 'required',
            'value' => 'required|string',
            'description' => 'string|max:60',
        ];
        $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute is required']);

        if ($validator->fails()){
            return response()->json($validator->errors());
        }
        $Feature_product = FeatureProduct::create($request->all());
        return response()->json([
            'status' => true,
            'message' => 'Product Detail created successfully',
            'data' => $Feature_product
         ],201);
    }

    public function update(string $id)
    {
        $detail = FeatureProduct::where('id',$id);

        $rules =  [
            'product_id' => 'required',
            'feature_id' => 'required',
            'value' => 'required|string',
            'description' => 'string|max:60',
        ];
        $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute is required']);

        if ($validator->fails()){
            return response()->json($validator->errors());
        }

        $detail->update($request->all());
        return response()->json([
            'status' => true,
            'message' => 'Product Detail updated successfully',
         ],200);
    }


    public function destroy(string $id)
    {
        $detail = FeatureProduct::where('id',$id);
        $detail->delete();
        return response()->json([
            'status' => true,
            'message' => 'Product Detail deleted successfully',
         ],200);
    }
}
