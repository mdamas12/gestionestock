<?php

namespace App\Http\Controllers;

use App\Models\Taxe;
use Illuminate\Http\Request;

class TaxeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $taxes = Taxe::get();

        return response()->json([
                'status' => true,
                'data' => $taxes
        ],200); 
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    
         $taxe = Taxe::create([
             'name' =>  $request->name,
             'percentage' => $request->percentage,

             
         ]);
         return response()->json([
             'status' => true,
             'data' => $taxe
         ],201); 
    }

    /**
     * Display the specified resource.
     */
    public function show(Taxe $taxe)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Taxe $taxe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $taxe = Taxe::where('id',$id)->first();
        $taxe->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $taxe = Taxe::where('id',$id)->delete();
    }
}
