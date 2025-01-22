<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Sale extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'sales';
    protected $fillable = [
        'user_id',
        'customer_id',
        'total_amount',
        'date',
        'taxes_amount',
        'payment_status'
    ];

     // Relación - Categoria: Un producto pertenece a una categoría
     public function customer()
     {
         return $this->belongsTo(Customer::class);
     }

     public function user()
     {
         return $this->belongsTo(User::class);
     }


     public function detailSale()
     {
         return $this->hasMany(SaleDetail::class);
     }

     public function taxes_sale()
     {
         return $this->hasMany(Taxe_sale::class);
     }
}
