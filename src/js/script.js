$(function() {


	/*$('.single-item').slick();*/

	$('.ser').click(function () {
		$('html, body').animate({scrollTop: $(".se").offset().top}, 2000);
	});
	$('.ab').click(function () {
		$('html, body').animate({scrollTop: $(".abot").offset().top}, 2000);
	});
	$('.works').click(function () {
		$('html, body').animate({scrollTop: $(".portf").offset().top}, 2000);
	});
	$('.tm').click(function () {
		$('html, body').animate({scrollTop: $(".comand").offset().top}, 2000);
	});
	$('.price').click(function () {
		$('html, body').animate({scrollTop: $(".pricing").offset().top}, 2000);
	});
	$('.testi').click(function () {
		$('html, body').animate({scrollTop: $(".testimonial").offset().top}, 2000);
	});

});