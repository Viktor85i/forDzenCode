$(function() {


	/*$('.single-item').slick();*/

	$('.scroll-about').click(function () {
		$('html, body').animate({scrollTop: $(".scroll-about-us").offset().top}, 2000);
	});
	$('.scroll-gallery').click(function () {
		$('html, body').animate({scrollTop: $(".scroll-gallery-us").offset().top}, 2000);
	});
	$('.scroll-shop').click(function () {
		$('html, body').animate({scrollTop: $(".scroll-shop-us").offset().top}, 3000);
	});
	$('.scroll-elements').click(function () {
		$('html, body').animate({scrollTop: $(".scroll-elements-us").offset().top}, 2000);
	});
	$('.scroll-blog').click(function () {
		$('html, body').animate({scrollTop: $(".scroll-blog-us").offset().top}, 2000);
	});
	$('.scroll-reservation').click(function () {
		$('html, body').animate({scrollTop: $(".scroll-reservation-us").offset().top}, 2000);
	});


	$('.price-item button').hover(function() {
		$(this).css({'color':'#38ecbf','background-color':'#26265c'});
		$(this).parent().prev().find('h3,span').css('color', '#38ecbf');


	});

	$('.price-item button').mouseout(function() {
		$(this).css({'color':'#ffffff','background-color':'#5b6ceb'});
		$(this).parent().prev().find('h3,span').css('color', '#ffffff');
	})

});