<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Branch extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'branches';
    protected $fillable = [
        'name',
        'description',
        'address',
        'phone',
        'email',
        'status',
    ];

      // Relación - Stock - uno a muchos: Una sucursal esta en muchos stocks

      public function stocks()
      {
          return $this->hasMany(Stock::class);
      }

  
}
