head.ready(function() {
	
	var btn_menu = $('.js-btn-menu'),
			btn_search = $('.js-btn-search'),
			btn_projects = $('.js-btn-projects'),
			menu = $('.js-menu'),
			menu_title = menu.find('.menu__title'),
			menu_list = menu.find('.menu__list'),
			search = $('.js-search'),
			search_select = search.find('.search__select'),
			projects = $('.js-projects'),
			projects_type = projects.find('.projects__type'),
			projects_list = projects.find('.projects__list'),
			projects_close = projects.find('.projects__close'),
			container = $('.js-container'),
			types = $('.js-types'),
			types_title = types.find('.types__title'),
			types_in = types.find('.types__in'),
			dp = $('.js-dp'),
			dp_el = dp.find('.dp__el'),
			dp_in = dp.find('.dp__in'),
			dp_close = dp.find('.dp__close'),
			btn_dp = $('.js-btn-dp'),
			text_toggle = $('.js-text-toggle'),
			slider = $('.js-slider'),
			body = $('body');

	// menu		
	btn_menu.on('click', function () {
		btn_menu.toggleClass('is-active');
		projects.removeClass('is-open');
		container.removeClass('is-moved-projects');
		container.toggleClass('is-moved-menu');
		menu.toggleClass('is-open');
	});

	// projects		
	btn_projects.on('click', function () {
		btn_projects.toggleClass('is-active');
		menu.removeClass('is-open');
		container.removeClass('is-moved-menu');
		container.toggleClass('is-moved-projects');
		projects.toggleClass('is-open');
		if ($('.js-btn-menu').hasClass('is-active')) {
			$('.js-btn-menu').removeClass('is-active');
		}
	});
	projects_close.on('click', function () {
		btn_projects.trigger('click');
		projects.toggleClass('is-open');
		container.toggleClass('is-moved-projects');
	});
	$('.overlay').on('click', function() {
		$('.js-projects, .js-menu').removeClass('is-open');
		$('body').removeClass('is-moved-menu');
		$('body').removeClass('is-moved-projects');
		$('.js-btn-menu').removeClass('is-active');
	});
	// touch
	$('body').swipe({
	  swipeLeft: function(event, direction, distance, duration, fingerCount) {
	  	menu.removeClass('is-open');
	  	projects.removeClass('is-open');
	  	container.removeClass('is-moved-menu is-moved-projects');
	  	btn_projects.removeClass('is-active')
	  	btn_menu.removeClass('is-active')
	  }
	});

	// search
	btn_search.on('click', function () {
		btn_search.toggleClass('is-active');
		search.slideDown();
		body.scrollTop(0);
	});

	$('.search__close').on('click', function() {
		btn_search.toggleClass('is-active');
		search.slideUp();
		return false;
	});

	// select
	search_select.on('change', function(){
		var option_selected = $(this).find('option:selected'),
	 	value_selected = option_selected.text();
	 	$(this).find('.search__select-head').text(value_selected);
	 	types_item_size();
	});
	// projects accordeon
	projects_type.on('click', function () {
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$(this).next().slideUp();
		}
		else {
			projects_type.removeClass('is-active');
			projects_list.slideUp();
			$(this).addClass('is-active');
			$(this).next().slideDown();
		}
	});

 	// toggle text
 	text_toggle.on('click', function () {
 		var el = $(this).parent().prev();
		if (!el.hasClass('is-activated')) {
			cur_height = el.height();
			el.addClass('is-activated');
		};
		var	auto_height = el.css('height', 'auto').height(),
		    text_hide = $(this).data('text-hide'),
		    text_show = $(this).data('text-show');
 		if ($(this).hasClass('is-active')) {
 			$(this).removeClass('is-active');
 			$(this).find('span').text(text_show);
 			el.animate({height: cur_height}, 400);
 		}
 		else {
 			$(this).addClass('is-active');
 			$(this).find('span').text(text_hide);
 			el.height(cur_height).animate({height: auto_height}, 400);
 		}
 	});

 	// opera
 	if (navigator.userAgent.match(/Opera Mobi/i)) {
 		body.addClass('is-fucking-opera');
 	};
 // 	//scroll
 // 	$('.menu__inner').jScrollPane( {
	// });
 // 	$('.projects__inner').jScrollPane( {
	// });

	// slider
 	if (slider.length) {
 		var slider_list = slider.find('.slider__list'),
 				slider_length = slider.find('.slider__item').length,
 				slider_all = slider.find('.slider__all'),
 				slider_current = slider.find('.slider__current');
 		slider_list.slick({
 			dots: true,
 			arrows: true,
 			infinite: true,
 			slidesToShow: 1,
 			slidesToScroll: 1,
			swipeToSlide: true,
			touchThreshold: 10,
 			slide: '.slider__item',
 			onInit: function() {
 				slider_all.text(slider_length);
 			},
 			onAfterChange: function(index) {
 			  var index = slider_list.slickCurrentSlide() + 1;
 			  slider_current.text(index);
 			}
 		});
 	};
 	$('.slick-next').slickNext();
 	$('.slick-prev').slickPrev();
 	//comments my
 	$('.comments__my textarea').focusin(function(event) {
 		/* Act on the event */
 		$('.comments__submit').addClass('is-mod');
 	});
 	$('.comments__my textarea').focusout(function(event) {
 		/* Act on the event */
 		$('.comments__submit').removeClass('is-mod');
 	});
});