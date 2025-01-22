<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
//use App\Traits\HasUuid;
class Category extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'categories';
    protected $fillable = [
        'id',
        'name',
        'description',
        'status',
    ];

     // Relación uno a muchos: Una categoría tiene muchos productos
     public function products()
     {
         return $this->hasMany(Product::class);
     }

 
}
