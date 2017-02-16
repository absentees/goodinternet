/* globals WebFont */
/* jshint unused:false */

import BigText from 'BigText';

$(document).ready(function () {
	if ($('.bigtext').length) {
		const bigText = new BigText();
		bigText.init();
	}
});
