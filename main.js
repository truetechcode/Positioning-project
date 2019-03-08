'use strict';

$(".dropdown-trigger").on('click', function (e) {
	// body...
	e.preventDefault();
	// $(this).parent().children('.dropdown-content').css("display", "block");
	$(this).parent().children('.dropdown-content').toggle();
})