$(document).ready(function(){
	/*----------------------------------------------
	  MOBILE NAVIGATION
	----------------------------------------------*/
	if($(window).width() < 601) {
		// HIDE MENU
		$('li').css({"display":"none"});
		$('#menu').click(function(){
			$('li').toggle();
		});
		$('#about-link').click(function() {
			$('li').hide();
		});
		$('#demo-link').click(function() {
			$('li').hide();
		});
		$('#contact-link').click(function() {
			$('li').hide();
		});
	}
	/*----------------------------------------------
	  NAVIGATION -- SCROLL TO ELEMENT ON CLICK
	----------------------------------------------*/
	// SCROLL TO TOP
	$('nav').on('click','.home-logo', function() {
		$('html, body').animate({
			scrollTop: $('#home').offset().top
		}, 500);
	});
	// SCROLL TO ABOUT SECTION
	$('nav').on('click','#about-link', function() {
		$('html, body').animate({
			scrollTop: $('#about').offset().top
		}, 500);
	});
	// SCROLL TO DEMO SECTION
	$('nav').on('click','#demo-link', function() {
		$('html, body').animate({
			scrollTop: $('#demo').offset().top
		}, 500);
	});
	// SCROLL TO CONTACT SECTION
	$('nav').on('click','#contact-link', function() {
		$('html, body').animate({
			scrollTop: $('#contact').offset().top
		}, 500);
	});
	/*----------------------------------------------
	  NAVIGATION -- CHANGE NAVIGATION BAR COLOR
	----------------------------------------------*/
	// CHANGE NAV BACKGROUND ON SCROLL FOR MOBILE
	$(window).scroll(function() {
		if($(window).scrollTop() >= 251) {
			$('nav').css("background-color", "rgba(246,248,240,.9)");
		} else {
			$('nav').css("background-color", "rgba(246,248,240,.6)");
		}
	});
	// CHANGE NAV BACKGROUND ON SCROLL FOR TABLET
	$(window).scroll(function() {
		if($(window).scrollTop() >= 548) {
			$('nav').css("background-color", "rgba(246,248,240,.9)");
		} else {
			$('nav').css("background-color", "rgba(246,248,240,.6)");
		}
	});
	// CHANGE NAV BACKGROUND ON SCROLL FOR SCREEN MIN-WIDTH 1024px
	$(window).scroll(function() {
		if($(window).scrollTop() >= 720) {
			$('nav').css("background-color", "rgba(246,248,240,.9)");
		} else {
			$('nav').css("background-color", "rgba(246,248,240,.6)");
		}
	});
	// CHANGE NAV BACKGROUND ON SCROLL FOR SCREEN MIN-WIDTH 1280px
	$(window).scroll(function() {
		if($(window).scrollTop() >= 890) {
			$('nav').css("background-color", "rgba(246,248,240,.9)");
		} else {
			$('nav').css("background-color", "rgba(246,248,240,.6)");
		}
	});
	// CHANGE NAV BACKGROUND ON SCROLL FOR SCREEN MIN-WIDTH 1440px
	$(window).scroll(function() {
		if($(window).scrollTop() >= 1000) {
			$('nav').css("background-color", "rgba(246,248,240,.9)");
		} else {
			$('nav').css("background-color", "rgba(246,248,240,.6)");
		}
	});
	// CHANGE NAV BACKGROUND ON SCROLL FOR SCREEN MIN-WIDTH 1920px
	$(window).scroll(function() {
		if($(window).scrollTop() >= 1334) {
			$('nav').css("background-color", "rgba(246,248,240,.9)");
		} else {
			$('nav').css("background-color", "rgba(246,248,240,.6)");
		}
	});
});