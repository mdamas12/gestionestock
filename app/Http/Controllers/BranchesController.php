<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Models\products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BranchesController extends Controller
{
  
    public function index()
    {
        $branches = Branch::all();

        return response()->json([
                'status' => true,
                'data' => $branches
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
            'address' => 'string|max:100',
            'phone' => 'string|max:20',
            'email' => 'email',
            'status' => 'boolean'
        ];
        $validator = Validator::make($request->all(), $rules, ['required' => 'El Campo :attribute es requerido']);

        if ($validator->fails()){
            return response()->json($validator->errors());
        }
        $branch = Branch::create($request->all());
        return response()->json([
            'status' => true,
            'message' => 'Branch created successfully',
            'data' => $branch
         ],201);
    }


    public function show(string $search)
    {
        $branch = Branch::where('name', 'LIKE', "%$search%")->get();
       
        return response()->json([
                'status' => true,
                'data' => $branch
             ],200); 
    }

    public function edit(branches $branches)
    {
        //
    }

  
    public function update(Request $request, string $id)
    {
        $branch = Branch::where('id',$id)->first();
        $rules =  [
            'name' => 'required|string|max:50',
            'description' => 'required|string|max:60',
            'address' => 'string|max:100',
            'phone' => 'string|max:20',
            'email' => 'email',
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
        $branch->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'branch updated successfully',
            'data' => $branch
         ],200);
    }

    public function destroy(string $id)
    {
        $branch =Branch::where('id',$id)->first();
        $branch->delete();
        return response()->json([
            'status' => true,
            'message' => 'branch deleted successfully',
         ],200);
    }

      /**
     * Search branch whereNotin Sotck by product 
     */

     public function listBranchByProduct(string $product_id){


        $branches = Branch::leftJoin('stocks', function ($join) use ($product_id) {
            $join->on('branches.id', '=', 'stocks.branch_id')
                 ->where('stocks.product_id', $product_id);
        })
        ->whereNull('stocks.branch_id')
        ->select('branches.*')
        ->get();

        return response()->json([
            'status' => true,
            'data' => $branches,
            'message' => 'branch listed successfully',
         ],200);
    
    }
}
