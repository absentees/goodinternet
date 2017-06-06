<?php

$data = Context::getDefaultContext();

// Set page title
$data['title'] = $data['site']->title;
$data['sites'] = Timber::get_posts([
	'post_type' => 'site'
]);

Timber::render('home.twig', $data);

?>
