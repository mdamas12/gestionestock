<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Equipment extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $table = 'equipments';
    protected $fillable = [
        'date',
        'user_id',
        'name',
        'code',
        'description',
        'diagnostic',
        'report',
        'status'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
