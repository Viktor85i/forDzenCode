$(function() {
// show hide tabs	
$('#tabs li').click(function(){
		var thisClass = this.className.slice(0,2);
		$('div.t1').hide();
		$('div.' + thisClass).fadeIn(500);
		$('#tabs li').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('li.t1').click();


 //scroll to next page
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