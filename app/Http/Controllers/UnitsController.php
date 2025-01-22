<?php

namespace App\Http\Controllers;

use App\Models\Unit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UnitsController extends Controller
{

    public function index()
    {
        $units = Unit::all();
        return response()->json([
                'status' => true,
                'data' => $units
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
            'abbreviation' => 'string|max:10',
            'type' => 'string|in:time,technology,length,mass,electricity,temperature,area,volume,velocity',
            'status' => 'boolean'
        ];
        $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute is required']);

        if ($validator->fails()){
            return response()->json($validator->errors());
        }
        $unit = Unit::create($request->all());
        return response()->json([
            'status' => true,
            'message' => 'Unit created successfully',
            'data' => $unit
         ],201);
    }


    public function show(string $id)
    {
        $unit = Unit::where('id',$id)->first();
        return response()->json([
                'data' => $unit
             ],200); 
    }

 
    public function edit(Unit $unit)
    {
        //
    }


    public function update(Request $request, string $id)
    {
        $unit = Unit::where('id',$id)->first();
        $rules =  [
            'name' => 'required|string|max:50',
            'abbreviation' => 'string|max:10',
            'type' => 'string|max:15',
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
        $unit->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Unit updated successfully',
            'data' => $unit
         ],200);
    }

  
    public function destroy(string $id)
    {
        $unit = Unit::where('id',$id)->first();
        $unit->delete();
        return response()->json([
            'status' => true,
            'message' => 'Unit deleted successfully',
         ],200);
    }
}
