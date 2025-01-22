<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Taxe_sale extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'taxes_sales';
    protected $fillable = [
        'sale_id',
        'taxe_id',
    ];

    // Relación - Sale: 
    public function sale()
    {
        return $this->belongsTo(Sale::class);
    }

    // Relación - produc: Una caracteristica pertenece a un producto 
    public function taxe()
       {
           return $this->belongsTo(Taxe::class);
       }
}
