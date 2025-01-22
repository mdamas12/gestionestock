<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FeaturesController extends Controller
{
  
    public function index()
    {
        $features = Feature::all();
        return response()->json([
                'status' => true,
                'data' => $features
        ],200); 
    }

    
    public function create()
    {
        //
    }

  
    public function store(Request $request)
    {
        $rules =  [
            'name' => 'required|string|max:50',
            'description' => 'string|max:60',
            'status' => 'boolean'
        ];
        $validator = Validator::make($request->all(), $rules, ['required' => 'El Campo :attribute es requerido']);

        if ($validator->fails()){
            return response()->json($validator->errors());
        }
        $feature = Feature::create($request->all());
        return response()->json([
            'status' => true,
            'message' => 'Feature created successfully',
            'data' => $feature
         ],201);
    }

   
    public function show(string $id )
    {
        $feature = Feature::where('id',$id)->first();
        
        return response()->json([
                'data' => $feature
             ],200); 
    }

    public function edit(Feature $feature)
    {
        //
    }


    public function update(Request $request, string $id )
    {
        $feature = Feature::where('id',$id)->first();
        $rules =  [
            'name' => 'required|string|max:50',
            'description' => 'string|max:60',
            'status' => 'boolean'
        ];
        
        $validator = Validator::make($request->all(), $rules, ['required' => 'El Campo :attribute es requerido']);

        if($validator->fails()){
            return response()->json([
               'status' => false,
               'message' => 'errors',
               'errors' => $validator->errors()->all()
            ],400);
        }
        $feature->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'feature updated successfully',
            'data' => $feature
         ],200);
    }
    

   
    public function destroy(string $id)
    {
        $feature = Feature::where('id',$id)->first();
        $feature->delete();
        return response()->json([
            'status' => true,
            'message' => 'feature deleted successfully',
         ],200);
    }
}
