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
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->unsigned();
            $table->unsignedBigInteger('customer_id')->unsigned();
            $table->decimal('total_amount', 10, 2);
            $table->decimal('taxes_amount', 10, 2);
            $table->enum('payment_status',['pending','partial','completed']);
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDeelete('cascade');
            $table->foreign('customer_id')->references('id')->on('customers')->onDeelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales');
    }
};
