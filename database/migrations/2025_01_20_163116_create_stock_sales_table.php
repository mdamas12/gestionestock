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
        Schema::create('stock_sales', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sale_detail_id')->unsigned();
            $table->unsignedBigInteger('stock_id')->unsigned();
            $table->decimal('quantity', 10, 2);
            $table->timestamps();

            $table->foreign('sale_detail_id')->references('id')->on('sale_details')->onDeelete('cascade');
            $table->foreign('stock_id')->references('id')->on('stocks')->onDeelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_sales');
    }
};
