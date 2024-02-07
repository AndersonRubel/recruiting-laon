<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media', function (Blueprint $table) {
            $table->id();
            //$table->string('uuid')->unique();
            $table->enum('type', ['movie', 'tv_show']);
            $table->string('title');
            $table->string('original_title');
            $table->string('year');
            $table->string('duration');
            $table->string('genre');
            $table->string('synopsis');
            $table->string('cast');         
            $table->string('awards');         
            $table->string('director');         
            $table->string('reviews');         
            $table->string('link_cover');         
            $table->string('link_trailer');         
            $table->string('slug');         
            $table->integer('total_views');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media');
    }
}
