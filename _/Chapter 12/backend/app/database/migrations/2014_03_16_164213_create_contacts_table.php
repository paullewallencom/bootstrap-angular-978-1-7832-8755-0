<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateContactsTable extends Migration {

	public function up()
	{
		Schema::create('contacts', function(Blueprint $table) {
			$table->increments('id');
			$table->text('name');
			$table->string('phone', 256)->nullable();
			$table->text('address')->nullable();
			$table->string('email', 256)->nullable();
			$table->string('website', 256)->nullable();
			$table->text('notes')->nullable();
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('contacts');
	}
}