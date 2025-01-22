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
        Schema::create('taxes_sales', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sale_id')->unsigned();
            $table->unsignedBigInteger('taxe_id')->unsigned();
            $table->timestamps();

            $table->foreign('sale_id')->references('id')->on('sales')->onDeelete('cascade');
            $table->foreign('taxe_id')->references('id')->on('taxes')->onDeelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('taxes_sales');
    }
};
