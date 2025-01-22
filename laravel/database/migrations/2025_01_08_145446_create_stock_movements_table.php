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
        Schema::create('stock_movements', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('stock_id')->unsigned();
            $table->unsignedBigInteger('user_id')->unsigned();
            $table->enum('type',['entry','exit']);
            $table->decimal('quantity', 10, 2);
            $table->timestamps();
  
            $table->foreign('stock_id')->references('id')->on('stocks')->onDeelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDeelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_movements');
    }
};
