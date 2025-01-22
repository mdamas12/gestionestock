<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;

class AuthController extends Controller
{
    public function register(Request $request)
        {
           
        $rules = [
                'name' => 'required|string|max:100',
                'email' => 'required|string|email|max:100|unique:users',
                'password' => 'required|string|min:8',
                'role' => 'required|string|in:administrator,seller,technical',
            ];
  
            $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute :attribute is required']);
            if($validator->fails()){
            
                return response()->json([
                    'status' => false,
                    'errors' => $validator->errors()->all()
                ],400);

            }
            
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ])->assignRole($request->role);

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'status' => true,
                'message' => 'User registered successfully', 
                'user' => $user, 
                'access_token' => $token, 
                'token_type' => 'Bearer'
            ],201);
        }



public function login(Request $request)
{

    $rules = [
        'email' => 'required|string|email|max:100',
        'password' => 'required|string',
    ];

    $validator = Validator::make($request->all(), $rules, ['required' => 'the attribute :attribute is required']);
    if($validator->fails()){
        return response()->json([
            'status' => false,
            'errors' => $validator->errors()->all()
        ],400);

    }

    if(!Auth::attempt($request->only('email','password'))){
        return response()->json([
            'status' => false,
            'errors' => ['Unauthorized']
        ],401);
    }
    $user = User::where('email', $request->email)->first();

    $token = $user->createToken('auth_token')->plainTextToken;


    return response()->json([
        'status' => true,
        'message' => 'User Logged in successfully',
        'access_token' => $token, 
        'token_type' => 'Bearer',
        'data'=> $user 
    ],200);
}

 public function logout(){
    atth()->user()->tokens()->delete();
    return response()->json([
        'status' => true,
        'message' => 'User Logged out successfully',

    ],200);
 }



 public function sendResetLinkEmail(Request $request)
 {
     $request->validate([
         'email' => 'required|email|exists:users,email',
     ]);

     $status = Password::sendResetLink($request->only('email'));

     return $status === Password::RESET_LINK_SENT
         ? response()->json(['message' => 'Reset link sent to your email.'])
         : response()->json(['message' => 'Unable to send reset link.'], 500);
 }

   /**
     * Restablecer la contraseña.
     */
    public function reset(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'token' => 'required',
            'password' => 'required|min:8|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email','password','password_confirmation','token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password),
                ])->save();
            }
        );

        return $status === Password::PASSWORD_RESET
            ? response()->json(['message' => 'Password reset successfully.'])
            : response()->json(['message' => 'Failed to reset password.'], 500);
    }

    public function getUserData(Request $request)
        {
            // Obtiene el usuario autenticado
            $user = Auth::user();
            $user->role = Auth::user()->getRoleNames()->first();
           
        


            // Retorna los datos del usuario
            return response()->json($user);
        }

   public function userList(){
      $users = User::with('roles')->get();

      return response()->json([
        'status' => true,
        'data' => $users,
     
     ],200);


   }

   public function getSeller(){
    $sellers = [];

    $users = User::with('roles')->get();
    foreach ($users as $user) {
        $role = $user['roles']['0'];
        if ($role['name']== 'seller'){
            array_push($sellers, $user);
        }
        
    }
    return response()->json([
      'status' => true,
      'data' => $sellers,
   
   ],200);

 }

 public function getTechnical(){
    $technicals = [];

    $users = User::with('roles')->get();
    foreach ($users as $user) {
        $role = $user['roles']['0'];
        if ($role['name']== 'technical'){
            array_push($technicals, $user);
        }
        
    }
    return response()->json([
      'status' => true,
      'data' => $technicals,
   
   ],200);

 }

   public function userUpdate(Request $request , string $id){
    $user = User::where('id',$id)->first();
    $user->name = $request->name;
    $user->email = $request->email;
    $user->update();
    $user->syncRoles($request->role);
    return response()->json([
      'status' => true,
      'data' => $user
   ],200);

 }
}
