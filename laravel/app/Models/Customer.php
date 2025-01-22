<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Customer extends Model
{

    use HasFactory;
    protected $guarded = [];
    protected $table = 'customers';
    protected $fillable = [
        'id',
       'identification',
       'name',
       'lastname',
       'email',
       'phone',
       'address'
    ];

    // Relación uno a muchos: Una categoría tiene muchos productos
    public function sales()
    {
        return $this->hasMany(Sale::class, 'customer_id');
    }

}
