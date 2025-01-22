<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BranchesController; 
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\FeaturesController; 
use App\Http\Controllers\UnitsController; 
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\StocksController;
use App\Http\Controllers\SaleController; 
use App\Http\Controllers\EquipmentController;
use App\Http\Controllers\TaxeController;
use App\Http\Controllers\FeatureProductController;   
use App\Http\Controllers\StockMovementController;   


Route::post('auth/register', [AuthController::class, 'register']);
Route::post('auth/login', [AuthController::class, 'login']);
Route::post('/forgot-password', [AuthController::class, 'sendResetLinkEmail']);
Route::post('/reset-password', [AuthController::class, 'reset']);
Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'getUserData']);  


Route::middleware('auth:sanctum')->group(function(){
    Route::get('users/list', [AuthController::class, 'userList']);
    Route::get('users/get-seller', [AuthController::class, 'getSeller']); 
    Route::get('users/get-technical', [AuthController::class, 'getTechnical']);   
    Route::put('users/user-update/{id}', [AuthController::class, 'userUpdate']); 
    Route::resource('branches', BranchesController::class);
    Route::get('branches/list-nostock/{id_product}', [BranchesController::class,'listBranchByProduct']);
    Route::resource('categories', CategoriesController::class);
    Route::resource('features', FeaturesController::class);
    Route::resource('units', UnitsController::class);
    Route::resource('customers', CustomerController::class);

    Route::get('products', [ProductsController::class,'index']); 
    Route::get('products/list', [ProductsController::class,'customList']);
    //Route::post('products/create', [ProductsController::class,'store']);
    Route::post('products/new-product', [ProductsController::class,'newProduct']);
    Route::put('products/update/{id}', [ProductsController::class,'update']);
    Route::get('products/stocks/{id}', [ProductsController::class,'searchByStock']);
    Route::get('products/show/{id}', [ProductsController::class,'show']);
    Route::put('products/update/{id}', [ProductsController::class,'update']);
    Route::delete('products/delete/{uuid}', [ProductsController::class,'show']);

   Route::post('features-product/create', [FeatureProductController::class,'store']);
   Route::put('features-product/update/{uuid}', [FeatureProductController::class,'update']);
   Route::delete('features-product/delete/{uuid}', [FeatureProductController::class,'destroy']);

    Route::get('stock/bybranch/{uuid}', [StocksController::class,'listByBranch']);
    Route::get('stock/byproduct/{uuid}', [StocksController::class,'listByProduct']);
    Route::post('stock/createstock', [StocksController::class,'createStockByProduct']);
    Route::put('stock/updatestock/{uuid}', [StocksController::class,'updateStockByProduct']);
    Route::put('stock/update/{id}', [StocksController::class,'updateStock']);
    Route::delete('stock/deletestock/{uuid}', [StocksController::class,'destroyStockByProduct']);
    
    Route::get('movements/all', [StockMovementController::class,'index']);
    Route::post('movements/createmovement', [StockMovementController::class,'createMovement']);
    Route::put('movements/updatemovement/{uuid}', [StockMovementController::class,'UpdateMovement']);
    Route::delete('movements/deletemovement/{uuid}', [StockMovementController::class,'destroyMovement']);

    Route::get('sales/all', [SaleController::class,'listSales']);
    Route::get('sales/listbycustomer/{id}', [SaleController::class,'listSalesbyCustomer']);
    Route::get('sales/byseller', [SaleController::class,'listSalesbyUser']);
    Route::get('sales/listbydate/{date}', [SaleController::class,'listSalesbyDate']);
    Route::get('sales/show/{id}', [SaleController::class,'showSale']);
    Route::post('sales/create', [SaleController::class,'createSale']);
    Route::put('sales/update/{id}', [SaleController::class,'updateSale']);
    Route::delete('sales/delete/{id}', [SaleController::class,'deleteSale']);
    Route::get('sales/getstocks/{sale_detail_id}', [SaleController::class,'getStocks']); 

    Route::get('equipments/all', [EquipmentController::class,'listEquipments']); 
    Route::get('equipments/bytechnical', [EquipmentController::class,'listEquipmentsBytechnical']); 
    Route::post('equipments/create', [EquipmentController::class,'createSoport']);
    Route::put('equipments/asign/{id}', [EquipmentController::class,'asign']); 
    Route::put('equipments/diagnostic/{id}', [EquipmentController::class,'diagnosticSoport']); 
    Route::put('equipments/report/{id}', [EquipmentController::class,'reportSoport']); 
    Route::delete('equipments/delete/{id}', [EquipmentController::class,'destroy']); 
    Route::get('equipments/asign-notification', [EquipmentController::class,'notificationAsign']); 
    
    Route::get('notifications/product-low', [SaleController::class,'alertLowStock']); 


   
    Route::resource('taxes', TaxeController::class);
    
    Route::get('auth/logout', [AuthController::class, 'logout']);
});