<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;


    protected $guarded = [];
    protected $table = 'products';
    protected $fillable = [
        'category_id',
        'name',
        'sku',
        'description',
        'price',
        'status',
    ];

     // Relación - Categoria: Un producto pertenece a una categoría
     public function category()
     {
         return $this->belongsTo(Category::class);
     }

     public function featureProducts()
     {
         return $this->hasMany(FeatureProduct::class);
     }

     public function stocks()
     {
         return $this->hasMany(Stock::class);
     }

     public function sales_details()
     {
         return $this->hasMany(SaleDetail::class);
     }

 

}
