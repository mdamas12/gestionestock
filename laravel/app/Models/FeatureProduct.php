<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FeatureProduct extends Model
{
    use HasFactory;
    
    
    protected $guarded = [];
    protected $table = 'feature_products';
    protected $fillable = [
       'product_id',
       'feature_id',
       'value',
       'description'
    ];

    // Relación - Feature: 
     public function feature()
        {
            return $this->belongsTo(Feature::class);
        }

     // Relación - produc: Una caracteristica pertenece a un producto 
          public function product()
     {
         return $this->belongsTo(Product::class);
     }

 

}
