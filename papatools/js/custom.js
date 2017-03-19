$(document).ready(function() {
	
	// PopUp's
	$('#callback').click(function (){
		$('.popup_form').fadeIn(600);
		$('.popup_back').fadeIn(600);
	});
	$('.pop_form_close').click(function (){
		$('.popup_form').fadeOut(600);
		$('.popup_back').fadeOut(600);
	});
	
	$('#city_select').click(function (){
		$('.popup_city').css("visibility", "visible");
		$('.popup_back').css("display", "block");
	});
	$('.pop_form_close').click(function (){
		$('.popup_city').css("visibility", "hidden");
		$('.popup_back').css("display", "none");
	});
	
	// Slider City
	$('#city_cont').slick({
		infinite: false,
		//autoplay: true,
		arrows: true,
		speed: 400,
		slidesToShow: 5,
		slidesToScroll: 1,
		nextArrow: '<img class="arrow-stn" src="img/arrow-stl.png">',
		prevArrow: '<img class="arrow-stp" src="img/arrow-st.png">',
	});
	
	// Counter
	$('.quant_plus').click(function (){
		var num = Number($(this).next().val()) +1 ;
		$(this).next().val(num);
	})
	$('.quant_minus').click(function (){
		if($(this).prev().val() > 1){
			var num = Number($(this).prev().val()) -1 ;
			$(this).prev().val(num);
		}
	});

	// Top Menu Fixer
	$(function (){
		$(window).scroll(function (){
			if ($(this).scrollTop() > 150){
				$('#cat_menu').css("position", "fixed");
			} else{
				$('#cat_menu').css("position", "relative");
			}
		});		
	});
	
	// Top-slider
	$('#slider-top').slick({
		infinite: true,
		autoplay: true,
		arrows: true,
		speed: 400,
		slidesToShow: 6,
		slidesToScroll: 1,
		nextArrow: '<img class="arrow-stn" src="img/arrow-stl.png">',
		prevArrow: '<img class="arrow-stp" src="img/arrow-st.png">',
});

	// Slider Banner
	$('#slider-banner').slick({
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 500,
		/*fade: true,
		cssEase: 'linear'*/
	});
	
	// Accordion (Tab & Slide)
	$('.good-range').click(function(){
		$('.good-range').css({"background" : "#ebebeb", "color" : "#8d8d8d", "border-bottom" : "1px solid #c3c3c3"});
		$('.good-range span').css({"background-position" : "0 0"});
		$(this).css({"background" : "white", "color" : "#0074bc", "border-bottom" : "none"});
		$(this).find("span").css({"background-position" : "0 -30px"});
	});
	// + Item
	$('.item-range').click(function(){
		$('.item-range').css({"background" : "#ebebeb", "color" : "#8d8d8d", "border-bottom" : "1px solid #c3c3c3"});
		$(this).css({"background" : "white", "color" : "#0074bc", "border-bottom" : "none"});
	});
	
	//+ Slick
	$('.baffle2 .baffle-inner').slick({
		infinite: true,
		//autoplay: true,
		arrows: true,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: '<img class="arrow-stn" src="img/arrow-stl.png">',
		prevArrow: '<img class="arrow-stp" src="img/arrow-st.png">',
	});
	
	//+ Slick
	$('#tab-line .baffle-inner').slick({
		infinite: true,
		//autoplay: true,
		arrows: true,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: '<img class="arrow-stn" src="img/arrow-stl.png">',
		prevArrow: '<img class="arrow-stp" src="img/arrow-st.png">',
	});
	
	// Bottom Slider
	$('#slider-bottom').slick({
		infinite: true,
		//autoplay: true,
		arrows: true,
		speed: 400,
		slidesToShow: 5,
		slidesToScroll: 1,
		nextArrow: '<img class="arrow-stn" src="img/arrow-stl.png">',
		prevArrow: '<img class="arrow-stp" src="img/arrow-st.png">',
	});
	
	// Top Button
	$('.topbutton').click(function (){
		$('body,html').animate({
			scrollTop:0
		}, 800);
		return false;
	});
	
	// Spoilers
	$('.spoiler-head').click(function(){
		//$(this).next().slideToggle();
		$(this).next().slideToggle();
		$(this).find("span").toggleClass("s-open").toggleClass("s-close");
	});
	
	//-------------------------------------------------------
	// Catalog Image PopUp
	$('#item-pic').click(function (){
		$('.popup_gallery').css("visibility", "visible");
		$('.popup_back').css("display", "block");
	});
	$('.pop_form_close').click(function (){
		$('.popup_gallery').css("visibility", "hidden");
		$('.popup_back').css("display", "none");
	});
	
});