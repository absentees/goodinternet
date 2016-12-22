<?php

$data = Context::getDefaultContext();

// Set page title
$data['title'] = $data['site']->title;
$data['posts'] = Timber::get_posts();

Timber::render('home.twig', $data);

?>