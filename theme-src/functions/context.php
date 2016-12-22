<?php

class Context {

	// Set up all of the Timber context stuff we need on every page
	public static function getDefaultContext() {
		$data = Timber::get_context();
		
		return $data;
	}
}