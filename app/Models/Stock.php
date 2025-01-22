<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Stock extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'stocks';
    protected $fillable = [
       'branch_id',
       'product_id',
       'quantity_available',
       'minimum_quantity'
    ];

     // Relación - branch: Un stock pertenece a una sucursal
     public function branch()
     {
         return $this->belongsTo(Branch::class);
     }

       // Relación - Products: Un stock pertenece a una producto
    public function product()
       {
           return $this->belongsTo(Product::class);
       }

    public function stockSale()
       {
           return $this->hasMany(stockSale::class);
       }
}
