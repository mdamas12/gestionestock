<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Taxe extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'taxes';
    protected $fillable = [
        'name',
        'percentage',
    ];


     public function taxes_sale()
     {
         return $this->hasMany(Taxe_sale::class);
     }
}
