<?php

namespace App\Http\Controllers;

use App\Models\Equipment;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Notification;
use App\Notifications\AlertAsign;
class EquipmentController extends Controller
{
    
    public function listEquipments()
    {
        $equipments = Equipment::with('user')->get();
        return response()->json([
                'status' => true,
                'data' => $equipments
        ],200); 
    }

    public function listEquipmentsBytechnical()
    {
        $user = Auth::user();

        $equipments = Equipment::with('user')->where('user_id', $user->id)->get();
        return response()->json([
                'status' => true,
                'data' => $equipments
        ],200); 
    }


    


    public function createSoport(Request $request)
    {
     
        $date = Carbon::createFromFormat('d-m-Y', $request->date)->format('Y-m-d');
        $soport = Equipment::create([
            'user_id' =>  $request->user_id,
            'name' => $request->name,
            'date' => $date,
            'code' => $request->code,
            'description' => $request->description,
            'status' => $request->status,
            
        ]);

        return response()->json([
            'status' => true,
            'data' => $soport
        ],201); 
    }

   

   
    public function asign(Request $request, string  $id)
    {


        $equipment = Equipment::where('id',$id)->first();
        $equipment->user_id  = $request->user_id;
        $equipment->status  = 'assigned';
        $equipment->update();

        $this->notificationAsign($request->user_id, $id);
        
        return response()->json([
            'status' => true,
            'data' => $equipment
        ],200); 

    }

    public function diagnosticSoport(Request $request, string  $id)
    {
        $equipment = Equipment::where('id',$id)->first();
        $equipment->diagnostic  = $request->diagnostic;
        $equipment->update();
        return response()->json([
            'status' => true,
            'data' => $equipment
        ],200); 

    }

    public function reportSoport(Request $request, string  $id)
    {
        $equipment = Equipment::where('id',$id)->first();
      

        $equipment->report  = $request->report;
        $equipment->status  = "completed";
        $equipment->update();
        return response()->json([
            'status' => true,
            'data' => $equipment
        ],200); 

    }

    public function destroy(string $id)
    {
        $equipment = Equipment::where('id',$id)->first();
        $equipment->delete();
        
        return response()->json([
            'status' => true,
        ],200); 

    }

    public function notificationAsign(string $user_id, string $id){

        $user = User::where('id',$user_id)->first();
        $equipment = Equipment::where('id',$id)->first();
        Notification::route('mail', $user->email)->notify(new AlertAsign($equipment));
        return;
    }
}
