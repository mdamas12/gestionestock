<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sale_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sale_id')->unsigned();
            $table->unsignedBigInteger('product_id')->unsigned();
            $table->decimal('quantity', 10, 2);
            $table->decimal('amount', 10, 2); 
            $table->integer('discount_percentage');
            $table->timestamps();

            $table->foreign('sale_id')->references('id')->on('sales')->onDeelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDeelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sale_details');
    }
};
