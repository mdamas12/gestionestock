<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
   
    public function index()
    {
        $customers = Customer::all();
        return response()->json([
                'status' => true,
                'data' => $customers
        ],200); 
    }

 
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $rules =  [

            'identification' => 'required|string|max:20|unique:customers,identification',
            'name' => 'required|string|max:20',
            'lastname' => 'required|string|max:20',
            'email' => 'required|email',
            'phone' => 'string|max:20',
            'address' => 'string|max:80'
        ];
        $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute :the attribute is required']);

        if ($validator->fails()){
            return response()->json($validator->errors());
        }
        $customer = Customer::create($request->all());
        return response()->json([
            'status' => true,
            'message' => 'Customer created successfully',
            'data' => $customer
         ],201);
    }

 
    public function show(string $id)
    {
        $customer = Customer::where('id',$id)->first();
        return response()->json([
                'data' => $customer
             ],200); 
    }

  
    public function edit(Customer $customer)
    {
        //
    }

  
    public function update(Request $request, string  $id)
    {
        $customer = Customer::where('id',$id)->first(); 
        $rules =  [

            'identification' => 'required|string|max:20|unique:customers,identification',
            'name' => 'required|string|max:20',
            'lastname' => 'required|string|max:20',
            'email' => 'required|email',
            'phone' => 'string|max:20',
            'address' => 'string|max:80'
        ];
        $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute :the attribute is required']);

        if ($validator->fails()){
            return response()->json($validator->errors());
        }
        $customer->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'customer updated successfully',
            'data' => $customer
         ],200);

    }


    public function destroy(string $id)
    {
        $customer = Customer::where('id',$id);
        $customer->delete();
        return response()->json([
            'status' => true,
            'message' => 'Customer deleted successfully',
         ],200);
    }
}
