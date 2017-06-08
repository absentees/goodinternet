/* globals WebFont */
/* jshint unused:false */
import bigtext from 'big-ideas-text';

// $(document).ready(function () {
// 	if ($('.bigtext').length) {
// 		$('.bigtext').bigtext();
// 	}
// });

document.addEventListener("DOMContentLoaded", function(event) {
	var heading = document.querySelectorAll('.bigtext');
	bigtext(heading);
});
