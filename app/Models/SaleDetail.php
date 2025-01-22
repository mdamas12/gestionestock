<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class SaleDetail extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'sale_details';
    protected $fillable = [
        'sale_id',
        'product_id',
        'quantity',
        'amount', 
        'discount_percentage',
    ];

     // Relación - sale: unm detalle pertenece a una venta
     public function sale()
     {
         return $this->belongsTo(Sale::class, 'id');
     }

     public function product()
     {
         return $this->belongsTo(Product::class);
     }

     public function sales_stocks()
     {
         return $this->hasMany(stockSale::class);
     }



}
