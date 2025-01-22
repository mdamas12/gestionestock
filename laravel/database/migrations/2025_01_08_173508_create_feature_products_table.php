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
        Schema::create('feature_products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('feature_id')->unsigned();
            $table->unsignedBigInteger('product_id')->unsigned();
            $table->string('value',20);
            $table->text('description')->max(30)->nullable();
            $table->timestamps();
  
            $table->foreign('product_id')->references('id')->on('products')->onDeelete('cascade');
            $table->foreign('feature_id')->references('id')->on('features')->onDeelete('cascade');
          
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feature_products');
    }
};
