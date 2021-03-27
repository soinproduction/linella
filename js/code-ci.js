function changeLangue(obj){
	window.location.href = obj.getAttribute('data-link');
}
var $timeout = 0;
var $popup = $(".add-to-cart-popup");
$(document).ready(function(e) {
	$('body').on("click", '.add-to-cart-popup', function(e){
		if ($(e.target).attr('class') == 'add-to-cart-popup') {
			$('.add-to-cart-popup').fadeOut(200);
		}
	});

	// $('body').on("click", '.popup', function(e){
	// 	if ($(e.target).attr('class') == 'popup') {
	// 		$('.popup').fadeOut(200);
	// 	}
	// });

	$('body').on("click", '.popup-2', function(e){
		if ($(e.target).attr('class') == 'popup-2') {
			$('.popup-2').fadeOut(200);
		}
	});

	$('#prod-items').on("change", function(){
		var option = $('option:selected', this);
		$('.prod-price').text(option.attr('data-price'));
		$('.shop').attr('data-food', option.attr('data-food'));
	});

	$('.list-item').on("click", function(){
		$('.prod-price').text($(this).attr('data-price'));
		$('.shop').attr('data-food', $(this).attr('data-food'));
	});
	// add to cart
	$('.add-to-cart').on("click", function(){
		var food = $(this).attr('data-food');
		var $message = $(".cart-title");
		var $cart = $(".cart-total");
		$.ajax({
			type: "POST",
			dataType: "JSON",
			url: '/' + $lang + '/add-to-cart',
			data: { food_id: food },

			success: function(response) {
				if (response.success) {
					$popup.fadeIn(300);
					var $timeout = 3000;

					$message.text(response.message);

					$('.cart-total').text(response.total);

					// if ($timeout > 0) {
					// 	setTimeout(function(){
					// 		$popup.fadeOut(300);
					// 	}, $timeout);
					// }
				}
			}
		});
	});

	$('.close-popup').on('click', function() {
		$popup.fadeOut(300);
		$timeout = 0;
	});

	$('.bi6_del').on("click", function(){
		var food_item = $(this).attr('data-food-item');
		var delete_popup_block = $('.popup-2');
		delete_popup_block.fadeIn(300);
		$('.food-delete').attr('data-delete', food_item);
	});

	$('.food-delete').on("click", function() {
		var food = $('.food-delete');
		$.ajax({
			type: "POST",
			dataType: "JSON",
			url: '/' + $lang + '/delete-product-from-cart',
			data: { food: food.attr('data-delete') },
			beforeSend: function(){
				food.attr('disabled', true);
			},
			success: function(response) {
				if (response.success) {
					// page reload
					window.location.reload();
				}
			}
		});
	});

	$('.close-food-delete').on("click", function(){
		$('.popup-2').fadeOut(300);
	});


	$('html, body').on("click", ".jq-number__spin.plus, .jq-number__spin.minus", function(){
		var $input = $(this).parent().find('input');
		$.ajax({
			type: "POST",
			dataType: "JSON",
			url: '/' + $lang + '/change-quantity',
			data: {
				food_id: $input.attr('data-food'),
				quantity: $input.val(),
				price: $input.attr('data-price'),
			},
			success: function(response) {
				console.log(response);
				if (response.success) {
					$('.cart-total').text(response.total);
					$('.cart-summ').text(response.cart_summ);
					$('.cart-delivery').text(response.delivery);
					$('#f-' + $input.attr('data-food')).text(response.price);
				}
			}
		});
	});
	// load more news
	$("html, body").on("click", ".show-more", function(){
		var $load_more = $('.bi5_more');
		$.ajax({
			type: "POST",
			dataType: "JSON",
			url: '/' + $lang + '/show-more-news',
			data: { start: $(this).attr()},
			beforeSend: function(){
				$load_more.attr('disabled', true);
			},
			success: function(response) {
				if (response.status) {
					$('.news-list').appednd(response.html);

					$load_more.attr('disabled', false);

					if (!response.show_button) {
						$load_more.remove();
					}
				}
			}
		});
	});

	var $delete_popup = $("#popup");
	// Account
	$('html, body').on("click", ".delete-address", function(){
		$delete_popup.fadeIn(200);
		var $address = $(this).attr("data-add");
		$("html, body").on("click", ".delete", function(){
			$.ajax({
				type: "POST",
				dataType: "JSON",
				url: '/' + $lang + '/delete-user-address',
				data: { addr: $address },
				success: function(response) {
					if (response.success) {
						location.reload();
					}
				}
			});
		});
	});

	$('html, body').on("click", ".close-delete", function(){
		$delete_popup.fadeOut(200);
	});

	/* h_menu_mob */
	$('.m_ctrl').on('click', function() {
		$('.hmm_wr').toggle();
	});

	$('.hmm_wr').on('click', '.close', function() {
		$('.hmm_wr').toggle();
	});

	/*h_menu_ddown*/
	$('.h_menu_mob li.v1').children('a').on('click', function() {
		$(this).siblings('ul').slideToggle(300);
		$(this).parent().toggleClass('open');
	});

	/*Слайдер*/
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		rows: 0,
		infinite: true,
		responsive: [
			{
				breakpoint: 981,
				settings: {
					arrows: false,
					infinite: true,
				}
			}
		]
	});

	/*Карусель*/
	$('.carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		rows: 0,
		variableWidth: true,
		infinite: true,
		arrows: false
		// responsive: [
		// 	{
		// 		breakpoint: 600,
		// 		settings: {
		// 			slidesToShow: 2
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 480,
		// 		settings: {
		// 			slidesToShow: 1
		// 		}
		// 	}
		// ]
	});

	$('.carousel1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		rows: 0,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 981,
				settings: {
					arrows: false
				}
			}
		]
	});

	/*fancybox*/
	$("[data-fancybox]").fancybox({
		buttons : [
			'close'
		]
	});

	/*Форма*/
	$('input, select').styler({
		selectPlaceholder: '',
		selectVisibleOptions: 5
	});
	// $('.switch_a input').styler('destroy');

	$('.ffl-wrapper').floatingFormLabels();

	/*Вкладки*/
	$('.tabs_wr').tabs();
	$('.tabs_wr1').tabs();
	// $('.tabs_wr2').tabs();

	/*tooltip*/
	$('.info_hint').tooltip({
		position: {
			my: 'center top',
			at: 'center bottom+15'
		}
	});

	/*Scroll Pane*/
	$(function() {
		$('.scroll-pane').jScrollPane({
			autoReinitialise: true,
			verticalGutter: 20,
			verticalDragMinHeight: 100,
			verticalDragMaxHeight: 435,
			horizontalDragMinWidth: 100,
			horizontalDragMaxWidth: 435
		});
	});

	/*Order_history*/
	$('.bi13_head_b').on('click', function() {
		$(this).parent().toggleClass('open');
	});

	/*Order_adress*/
	$('.bi15_head').on('click', function() {
		$(this).parent().toggleClass('open');
	});

	/*Anchor menu*/
	$(document).on("scroll", onScroll);

	//smoothscroll
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$('a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');
		var target = this.hash,
			menu = target;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top+2
		}, 500, 'swing', function () {
			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
	});
});

function onScroll(event){
	var scrollPos = $(document).scrollTop();
	$('.c_wr12_nav a').each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$('.c_wr12_nav li a').removeClass("active");
			currLink.addClass("active");
		}
		else{
			currLink.removeClass("active");
		}
	});
}

$(document).ready(function() {
	$("a.gallery").fancybox();
});



