$(document).ready(function() {
	$(".button-collapse").sideNav();

	$.ajax({
		url: 'https://api.darksky.net/forecast/2e4093159b4c6795b02aed7e92aa915e/-33.45694,-70.64827',
		type: 'GET',
		dataType: 'jsonp',
	})
	.done(function(data) {
		console.log(data);

	})
	.fail(function() {
		console.log("error");
	})
	
	
});