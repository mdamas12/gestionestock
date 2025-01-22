<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class Roles extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role1 = Role::create(['name'=>'administrator']);
        $role2 = Role::create(['name'=>'seller']);
        $role3 = Role::create(['name'=>'technical']);
 
 
       Permission::create(['name'=>'dash.administrator'])->syncRoles([$role1]);
       Permission::create(['name'=>'dash.seller'])->syncRoles([$role2]);
       Permission::create(['name'=>'dash.technical'])->syncRoles([$role3]);
    }
}
