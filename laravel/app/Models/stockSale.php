<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class stockSale extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'stock_sales';
    protected $fillable = [
       'sale_detail_id',
       'stock_id',
       'quantity',
    ];

     // Relación - branch: Un stock pertenece a una sucursal
     public function stock()
     {
         return $this->belongsTo(Stock::class);
     }

       // Relación - Products: Un stock pertenece a una producto
       public function sele_detail()
       {
           return $this->belongsTo(SaleDetail::class);
       }

       
}
