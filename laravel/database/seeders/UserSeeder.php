<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
  
      $administrator =   User::create([
            'name' => 'administrator',
            'email' => 'administrator@gmail.com',
            'password' => Hash::make('gsp12345')
 
        ]);

      $administrator->assignRole('administrator');
    }
}
