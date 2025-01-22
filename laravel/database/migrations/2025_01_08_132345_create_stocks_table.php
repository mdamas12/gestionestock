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
        Schema::create('stocks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('branch_id')->unsigned();
            $table->unsignedBigInteger('product_id')->unsigned();
            $table->decimal('quantity_available', 10, 2);
            $table->decimal('minimum_quantity', 10, 2);
            $table->timestamps();

            $table->foreign('branch_id')->references('id')->on('branches')->onDeelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDeelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stocks');
    }
};
