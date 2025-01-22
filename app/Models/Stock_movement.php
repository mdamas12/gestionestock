<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class StockMovement extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'stock_movements';
    protected $fillable = [
       'user_id',
       'stock_id',
       'type',
       'quantity'
    ];

     // Relación - stock: Un movimiento  pertenece a un stock
     public function stock()
     {
         return $this->belongsTo(Stock::class, 'id');
     }

       // Relación - users: Un movimiento lo realiza un usuario
       public function usuer()
       {
           return $this->belongsTo(User::class, 'id');
       }
}
