<?php

class Contact extends Eloquent {

	protected $table = 'contacts';
	public $timestamps = true;
	protected $softDelete = false;
	public $guarded = array('id');

}