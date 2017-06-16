/* globals WebFont */
/* jshint unused:false */
import bigtext from 'big-ideas-text';
import modal from './modal';
import tiles from './tile';

document.addEventListener("DOMContentLoaded", function(event) {
	var heading = document.querySelectorAll('.bigtext');
	bigtext(heading);

	const modalController = new modal();
	modalController.init();
	const tileController = new tiles();
	tileController.init();

});
