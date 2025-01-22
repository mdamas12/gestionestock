<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoriesController extends Controller
{
   
    public function index()
    {
        $categories = Category::all();
        return response()->json([
                'status' => true,
                'data' => $categories
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
        $category = Category::create($request->all());
        return response()->json([
            'status' => true,
            'message' => 'Category created successfully',
            'data' => $category
         ],201);
    }


    public function show(string $id)
    {
        $category = Category::where('id',$id)->first();
        return response()->json([
                'data' => $category
             ],200); 
    }

    public function edit(categories $categories)
    {
        //
    }

 
    public function update(Request $request, string $id)
    {
        $category = Category::where('id',$id)->first();
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
        $category->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Category updated successfully',
            'data' => $category
         ],200);
    }

   
    public function destroy(string $id)
    {
        $category = Category::where('id',$id)->first();
        $category->delete();
        return response()->json([
            'status' => true,
            'message' => 'category deleted successfully',
         ],200);
    }
}
