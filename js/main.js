$(document).ready(function () {

	$(".header__burger").click(function(event) {
        $(".header__burger").toggleClass('header__burger__active'),
		$(".mob__menu-wrapp").toggleClass('mob__menu-wrapp__active');
		$(".overlay").toggleClass('overlay__active');
		$("body").toggleClass('fixed');
	  });
	  
	$('.search__mob').click(function () {
		$('.bottom__search').slideToggle()
	})

	$(window).scroll(function () {
		if($(this).scrollTop() > 100){
			$('.header').addClass('header__fixed')
			let headHeight = $('header').height()
			$('body').css('padding-top', `${headHeight + 10}px`)
		}else {
			$('.header').removeClass('header__fixed')
			$('body').css('padding-top', `0`)
		}

		if($(this).scrollTop() > 780)
			$('.bottom__product_fixed').fadeIn(100)
		else
			$('.bottom__product_fixed').fadeOut()


		// console.log($(this).scrollTop())
	})

	$('.center__block').click(function () {
		$('.popup__bl').fadeIn()
		$('.popup__black').fadeIn()
	})
	$('.popup__black').click(function () {
		$('.popup__bl').fadeOut()
		$('.popup__black').fadeOut()
	})
	$('.close__popup').click(function () {
		$('.popup__bl').fadeOut()
		$('.popup__black').fadeOut()
	})

	$('.shop-map__top').click(function () {
		$(this).addClass('shop-map__top_active')
	})

	$(document).click( function(e){
	    if ( $(e.target).closest('.shop-map__top').length ) {
	        
	    }else
			$('.shop-map__top').removeClass('shop-map__top_active')
	});

	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav',
	  responsive: [
	  	{
	  		breakpoint: 992,
	  		settings: {
	  			dots: true
	  		}
	  	}
	  ]
	});
	$('.slider-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  arrows: false,
	  centerMode: true,
	  focusOnSelect: true
	});

	$('.reviews__slider').slick({
		slidesToScroll: 1,
		slidesToShow: 3,
		centerMode: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1
				}
			},
		]
	})

	$('.header__languages').click(function () {
		$('.languages__body').slideToggle()
		$(this).find('li').click(function () {
			$('.languages__active').text($(this).text())
			$('.languages__body').find('li').removeClass('languages__active_li')
			$(this).addClass('languages__active_li')
		})
	})

	$('.select-map').find('.select__head').click(function () {
		$('.select-map').find('.select__body').slideToggle()
		$(this).toggleClass('select__head_open')
	})

	$('.footer__title').click(function () {
		$(this).parent().find('ul').slideToggle()
		$(this).toggleClass('footer__title_active')
	})

	$('.content__slider').slick({
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					arrows: false
				}
			}
		]
	});

	$('.header__catalog_top').click(function () {
		$(this).parent().toggleClass('header__catalog_active')
		$('.catalog__body').slideToggle()
	})
	$('.slider__tovar').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
					arrows: false,
					slidesToScroll: 2,
				}
			},
		]
	})

	$('.culinar__block_mob').slick({
		slidesToShow: 2,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1
				}
			},
		]

	})


	$('.button__like').click(function () {
		$(this).toggleClass('button__like_active')
	})

	$('.slider__block').slick({
		dots: true,
		arrows: false
	})

	$('.button__product').click(function () {
		$('.search__button').find('.button').removeClass('button_active')
		$(this).addClass('button_active')
		$('.tovars').slideDown()
		$('.informatia').slideUp()
		$('.blog').slideUp()
	})
	$('.button__inform').click(function () {
		$('.search__button').find('.button').removeClass('button_active')
		$(this).addClass('button_active')
		$('.informatia').slideDown()
		$('.tovars').slideUp()
		$('.blog').slideUp()
	})
	$('.button__blog').click(function () {
		$('.search__button').find('.button').removeClass('button_active')
		$(this).addClass('button_active')
		$('.blog').slideDown()
		$('.tovars').slideUp()
		$('.informatia').slideUp()
	})
	$('.button__inputs').click(function () {
		$('.search__button').find('.button').removeClass('button_active')
		$(this).addClass('button_active')
		$('.button-block').slideUp()
		$('.inputs').slideDown()
	})
	$('.buttons__tables').click(function () {
		$('.search__button').find('.button').removeClass('button_active')
		$(this).addClass('button_active')
		$('.button-block').slideUp()
		$('.tables').slideDown()
	})
	$('.buttons__tovars').click(function () {
		$('.search__button').find('.button').removeClass('button_active')
		$(this).addClass('button_active')
		$('.button-block').slideUp()
		$('.tovars').slideDown()
	})
	$('.buttons__istoric').click(function () {
		$('.search__button').find('.button').removeClass('button_active')
		$(this).addClass('button_active')
		$('.button-block').slideUp()
		$('.istoric').slideDown()
	})

	$('.search__button').find('.button').click(function () {
		$('.search__button').find('.button').removeClass('button_active')
		$(this).addClass('button_active')
	})



	$('.gallery__slider').slick({
		arrows: false,
		dots: true
	});

	$('.gallery__slider_job').slick({
		arrows: false,
		dots: true
	});
	$('.gallery__slider_job_to').slick({
		arrows: false,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 1
	});


	// list
	// $('.name__block_h4').click(function () {
	// 	$('.lista__item').removeClass('item__body_open')
	// 	$(this).parent().parent().parent().parent().addClass('item__body_open')
	// 	console.log($(this).parent().parent().parent().parent().addClass('item__body_open'))
	// })

	// faq
	$('body').on('click', '.faq__item', function () {
		if(!$(this).hasClass('faq__item_open')) {
			$('.faq__item').removeClass('faq__item_open');
			$(this).addClass('faq__item_open');
		} else {
			$(this).removeClass('faq__item_open');
		}
	})

	var number = 161.22;
	var last = number.toString().slice(-2);
	console.log(last); 

	// count
	$('.input__plus').click(function () {
		var max_qty = Number($(this).parent().find('.input__count').attr('max'));
		var qty = Number($(this).parent().find('.input__count').val());
		if(qty > max_qty){
			qty = max_qty;
		}else if(qty == max_qty){
			qty = max_qty;
		}else{
			qty += 1;
		}
		let price = Number($(this).parent().parent().parent().find('.price').data('price'));
		var priceNew = price * qty;

		$(this).parent().parent().parent().find('.td__full').html(`${Math.floor(priceNew)} <sup>${priceNew.toFixed(2).split('.')[1]}</sup>`);

		$(this).parent().find('.input__count').val(qty);

		
		var y = 0;
		$('.input__number').each(function () {
			let sum = Number($(this).val());
			y = Number(y) + sum;
		});

		$('.itog__item').html(Number(y));

		$('.quantity_count').val(qty);

		var z = 0;
		$('.price-div').each(function () {
			let sum2 = Number($(this).html());
			z = Number(z) + sum2;
			
		});
		$('.itog__price').html(Number(z));
	});

	$('.input__minus').click(function () {
		if ($(this).parent().find('.input__count').val() > 1){
			let price = Number($(this).parent().parent().parent().find('.price').data('price'));
			let plus = Number($(this).parent().find('.input__count').val()) - 1;
			$(this).parent().find('.input__count').val(plus);
			var priceNew = price * plus;
			// console.log(priceNew)
			$(this).parent().parent().parent().find('.td__full').html(`${Math.floor(priceNew)} <sup>${priceNew.toFixed(2).split('.')[1]}</sup>`);
			var y = 0
			$('.input__count').each(function () {
				let sum = Number($(this).val());
				y = Number(y) + sum;

			});
			$('.itog__item').html(Number(y));

			$('.quantity_count').val(plus);
			var z = 0;
			$('.price-div').each(function () {
				let sum2 = Number($(this).html());
				z = Number(z) + sum2;
				
			});
			$('.itog__price').html(Number(z));
		}
		else
			$(this).parent().find('.input__number').val(1)

		});


	// count blog
	$('.input__plus_blog').click(function () {
		var max_qty = Number($(this).parent().find('.input__count_blog').attr('max'));
		var qty = Number($(this).parent().find('.input__count_blog').val());
		var prece = $('.input__count_blog').data('totalsum');
		var blog_id = $('.input__count_blog').data('blog_id');
		if(qty > max_qty){
			qty = max_qty;
		}else if(qty == max_qty){
			qty = max_qty;
		}else{
			qty += 1;
		}
		$(this).parent().find('.input__count_blog').val(qty);
		$('.item__cont').each(function(index){
			count = $(this).data('weight') * qty;
			$(this).find(".weight").html(count);
		});
		$.ajax({
			url: '/blog_plus', // путь к обработчику
			type: 'POST', // метод отправки,
			dataType: 'json',
			data: {blog_id: blog_id, prece: prece, qty: qty},
			success: function (data) {
				console.log(data);
				$('.price.v2').html(data.price_total+' <sup> '+data.price_b_total+' </sup> MDL');
			},
			error: function (data) {
				console.log(data); // выводим ошибку в консоль
			}
		});

	});

	$('.input__minus_blog').click(function () {
		if ($(this).parent().find('.input__count_blog').val() > 1){
			let plus = Number($(this).parent().find('.input__count_blog').val()) - 1;
			$(this).parent().find('.input__count_blog').val(plus);
			// console.log(priceNew)
		}
		else {
			$(this).parent().find('.input__count_blog').val(1);
		}
		var qty = $(this).parent().find('.input__count_blog').val();
		var prece = $('.input__count_blog').data('totalsum');
		var blog_id = $('.input__count_blog').data('blog_id');
		$('.item__cont').each(function(index){
			count = $(this).data('weight') * qty;
			$(this).find(".weight").html(count);
		});
		$.ajax({
			url: '/blog_minus', // путь к обработчику
			type: 'POST', // метод отправки,
			dataType: 'json',
			data: {blog_id: blog_id, prece: prece, qty: qty},
			success: function (data) {
				console.log(data);
				$('.price.v2').html(data.price_total+' <sup> '+data.price_b_total+' </sup> MDL');
			},
			error: function (data) {
				console.log(data); // выводим ошибку в консоль
			}
		});
	});

	$('.input__count_blog').on('input', function() {
		var max_qty = Number($(this).attr('max'));
		var qty = Number($(this).val());
		console.log(qty);
		if(qty > max_qty){
			qty = max_qty;
		}else if(qty == max_qty){
			qty = max_qty;
		}else{
			qty = qty;
		}
		$(this).val(qty);
		var prece = $('.input__count_blog').data('totalsum');
		var blog_id = $('.input__count_blog').data('blog_id');
		$('.item__cont').each(function(index){
			count = $(this).data('weight') * qty;
			$(this).find(".weight").html(count);
		});
		$.ajax({
			url: '/blog_minus', // путь к обработчику
			type: 'POST', // метод отправки,
			dataType: 'json',
			data: {blog_id: blog_id, prece: prece, qty: qty},
			success: function (data) {
				console.log(data);
				$('.price.v2').html(data.price_total+' <sup> '+data.price_b_total+' </sup> MDL');
			},
			error: function (data) {
				console.log(data); // выводим ошибку в консоль
			}
		});

	});


	// count cart
	$('.input__plus_cart').click(function () {
		var max_qty = Number($(this).parent().find('.input__count').attr('max'));
		var qty = Number($(this).parent().find('.input__count').val());
		if(qty > max_qty){
			qty = max_qty;
		}else if(qty == max_qty){
			qty = max_qty;
		}else{
			qty += 1;
		}
		let price = Number($(this).parent().parent().parent().find('.price').data('price'));
		var priceNew = price * qty;

		var url_add = '/cart/update';
		var rowid = $(this).data('rowid');
		$.post(url_add, {rowid: rowid, quantity: qty}, function(data){
			data.cart_total = data.cart_total.split(' ').join('');
			console.log(data.cart_total);
			var cart_total = Number(data.cart_total);
			var cart_total_delivery = Number(data.cart_total)+Number(data.delivery_price);
			$('.cart_total_delivery').html(cart_total_delivery + ' MDL');
			cart_total_b = cart_total.toFixed(2).split('.')[1];
			$('.cart_total').html(cart_total + ' MDL');
			$('.total_price').html(`${Math.floor(cart_total)} <sup>${cart_total_b}</sup>`);
		}, 'json');

		$(this).parent().parent().parent().find('.td__full').html(`${Math.floor(priceNew)} <sup>${priceNew.toFixed(2).split('.')[1]}</sup>`);

		$(this).parent().find('.input__count').val(qty);



		var y = 0;
		$('.input__number').each(function () {
			let sum = Number($(this).val());
			y = Number(y) + sum;
		});

		$('.itog__item').html(Number(y));

		var z = 0;
		$('.price-div').each(function () {
			let sum2 = Number($(this).html());
			z = Number(z) + sum2;

		});
		$('.itog__price').html(Number(z));
	});

	$('.input__minus_cart').click(function () {
		if ($(this).parent().find('.input__count').val() > 1){
			let price = Number($(this).parent().parent().parent().find('.price').data('price'));
			let plus = Number($(this).parent().find('.input__count').val()) - 1;
			$(this).parent().find('.input__count').val(plus);
			var priceNew = price * plus;
			// console.log(priceNew)
			$(this).parent().parent().parent().find('.td__full').html(`${Math.floor(priceNew)} <sup>${priceNew.toFixed(2).split('.')[1]}</sup>`);
			var y = 0;

			var url_add = '/cart/update';
			var rowid = $(this).data('rowid');
			$.post(url_add, {rowid: rowid, quantity: plus}, function(data){
				data.cart_total = data.cart_total.split(' ').join('');
				console.log(data.cart_total);
				var cart_total = Number(data.cart_total);
				var cart_total_delivery = Number(data.cart_total)+Number(data.delivery_price);
				$('.cart_total_delivery').html(cart_total_delivery + ' MDL');
				cart_total_b = cart_total.toFixed(2).split('.')[1];
				$('.cart_total').html(cart_total + ' MDL');
				$('.total_price').html(`${Math.floor(cart_total)} <sup>${cart_total_b}</sup>`);
			}, 'json');

			$('.input__count').each(function () {
				let sum = Number($(this).val());
				y = Number(y) + sum;

			});
			$('.itog__item').html(Number(y));

			$('.quantity_count').val(plus);
			var z = 0;
			$('.price-div').each(function () {
				let sum2 = Number($(this).html());
				z = Number(z) + sum2;

			});
			$('.itog__price').html(Number(z));
		}
		else
			$(this).parent().find('.input__number').val(1)

	});

	$('.input__count').on('input', function() {
		var max_qty = Number($(this).attr('max'));
		var qty = Number($(this).val());
		console.log(qty);
		if(qty > max_qty){
			qty = max_qty;
		}else if(qty == max_qty){
			qty = max_qty;
		}else{
			qty = qty;
		}
		let price = Number($(this).parent().parent().parent().parent().find('.price').data('price'));
		var priceNew = price * qty;
		console.log(price);
		console.log(priceNew);
		var url_add = '/cart/update';
		var rowid = $(this).parent().parent().find('.input__minus_cart').data('rowid');
		$.post(url_add, {rowid: rowid, quantity: qty}, function(data){
			data.cart_total = data.cart_total.split(' ').join('');
			console.log(data.cart_total);
			var cart_total = Number(data.cart_total);
			console.log(data);
			var cart_total_delivery = Number(data.cart_total)+Number(data.delivery_price);
			$('.cart_total_delivery').html(cart_total_delivery + ' MDL');
			cart_total_b = cart_total.toFixed(2).split('.')[1];
			$('.cart_total').html(cart_total + ' MDL');
			$('.total_price').html(`${Math.floor(cart_total)} <sup>${cart_total_b}</sup>`);
		}, 'json');

		$(this).parent().parent().parent().parent().find('.td__full').html(`${Math.floor(priceNew)} <sup>${priceNew.toFixed(2).split('.')[1]}</sup>`);
		$(this).val(qty);

		var y = 0;
		$('.input__number').each(function () {
			let sum = Number($(this).val());
			y = Number(y) + sum;
		});

		$('.itog__item').html(Number(y));

		var z = 0;
		$('.price-div').each(function () {
			let sum2 = Number($(this).html());
			z = Number(z) + sum2;

		});
		$('.itog__price').html(Number(z));
	});




	$('.slider__body').slick({
		slidesToShow: 4,
		infinite: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});

	$('.catalog__lft').find('span').click(function () {
		$(this).parent().find('.level2').slideToggle()
		if($(this).parent().find('.level2').hasClass('level2') == true){
			$(this).parent().toggleClass('li__active')
		}
	})

	let scroll = 0
	$('.form__body_up-top').click(function (argument) {
		scroll += 100
		$('.form__body').animate({scrollTop: scroll}, 200)
		$('.select__body').find('ul').animate({scrollTop: scroll}, 200)
	})

	$('.form__body_up-bottom').click(function (argument) {
		scroll -= 100
		$('.form__body').animate({scrollTop: scroll}, 200)
	})

	$('.body__block').click(function (argument) {
		$(this).toggleClass('body__block_active')
	})

	$('.slider-block').slick({
		slidesToShow: 4,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			},
		]
	})

	$('.slider__block_2').slick({
		slidesToShow: 4,
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 1682,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 2,
					dots: true,
					arrows: false
				}
			},
		]
	})

	$('.noutati__slider').slick({
		slidesToShow: 1,
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 1682,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false
				}
			},
		]
	})

	$('.select-sort').find('.sort__head').click(function () {
		$('.sort__body').slideToggle()
		console.log($(this))
	})

	$('.sort__body').find('li').click(function () {
		console.log($(this).text())
		$('.sort__head').text($(this).text())
	})

	$('.type__item').click(function () {
		$('.type__item').removeClass('type__item_active')
		$(this).addClass('type__item_active')
	})

	setTimeout(function () {
		$('.block__form_2').hide()
	}, 500)

	$('.button-livrare').click(function (argument) {
		$('.button-ridicare').removeClass('button__item_acive')
		$(this).addClass('button__item_acive')
		$(this).parent().parent().parent().find('.block__form_1').slideDown()
		$(this).parent().parent().parent().find('.block__form_2').slideUp()
	})
	$('.button-ridicare').click(function (argument) {
		$('.button-livrare').removeClass('button__item_acive')
		$(this).addClass('button__item_acive')
		$(this).parent().parent().parent().find('.block__form_2').slideDown()
		$(this).parent().parent().parent().find('.block__form_1').slideUp()
	})

	$('.button-online').click(function (argument) {
		$('.button-offline').removeClass('button__item_acive')
		$(this).addClass('button__item_acive')
		$(this).parent().parent().parent().find('.block__form').slideDown()
	})
	$('.button-offline').click(function (argument) {
		$('.button-online').removeClass('button__item_acive')
		$(this).addClass('button__item_acive')
		$(this).parent().parent().parent().find('.block__form').slideUp()
	});

	$(".li-list").on("click","a", function (event) {
		event.preventDefault(); //опустошим стандартную обработку
		var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
			top = $(id).offset().top; //определим высоту от начала страницы до якоря
	$('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
	});

	// $(window).scroll(function (argument) {
	//
	// 	$('.loyality-text').find('.lft-side ul')
	// 	if($(window).scrollTop() > $('#Сolectare').offset().top - 20){
	// 		$('.li-list').removeClass('li__active')
	// 		$('#Сolectare1').addClass('li__active')
	// 		// console.log()
	// 	}
	// 	else if ($(window).scrollTop() > $('#Reduceri').offset().top - 20){
	// 		$('.li-list').removeClass('li__active')
	// 		$('#Reduceri1').addClass('li__active')
	// 		// console.log($('#Reduceri').offset().top - 10)
	// 	}
	// 	if ($(window).scrollTop() > $('#bonus').offset().top - 20){
	// 		$('.li-list').removeClass('li__active')
	// 		$('#bonus1').addClass('li__active')
	// 	}
	// 	// console.log()
	// 	console.log($(window).scrollTop())
	// 	console.log($('#bonus').offset().top)
	// })
	// console.log($('#Сolectare').offset().top)

	var acc = document.getElementsByClassName("step__list");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
		this.classList.toggle("step__list-active");
		var panel2 = this.nextElementSibling;
		if (panel2.style.maxHeight){
		  panel2.style.maxHeight = null;
		} else {
		  panel2.style.maxHeight = panel2.scrollHeight + "px";
		} 
	  });
	}



})
	$('[repeat]').each(function() {
     var toRepeat = $(this).text();
     var times = parseInt($(this).attr('repeat'));
     var repeated = Array(times+1).join(toRepeat);
     $(this).text(repeated).removeAttr('repeat');
   });

/* add to wishlist */
$('body').on('click', '.button_wishlist', function (e) {
	e.preventDefault();
	var button = $(this);
	var url_add = button.data('action');
	var product_id = button.data('product_id');
	$.ajax({
		url: url_add, // путь к обработчику
		type: 'POST', // метод отправки,
		dataType: 'json',
		data: {product_id: product_id},
		success: function (data) {
			button.parent().parent().addClass('d-none');
		},
		error: function (data) {
			console.log(data); // выводим ошибку в консоль
		}
	});
});

/* add to shoplist */
$('body').on('click', '.button_shoplist', function (e) {
	e.preventDefault();
	var button = $(this);
	var url_add = button.data('action');
	var product_id = button.data('product_id');
	$.ajax({
		url: url_add, // путь к обработчику
		type: 'POST', // метод отправки,
		dataType: 'json',
		data: {product_id: product_id},
		success: function (data) {
			if (data == 1){
				button.addClass('button__like_active');
			}else {
				button.removeClass('button__like_active');
			}
		},
		error: function (data) {
			console.log(data); // выводим ошибку в консоль
		}
	});
});


$('body').on('click', '.form__body_up-top', function (e) {
	$('.catalog__body_index').animate({ scrollTop: 560 }, 300);
	$('.form__body_up-top').addClass('d-none');
});

$('.catalog__body_index').scroll(function(){
if (this.scrollTop>=this.scrollHeight-this.clientHeight-30){
	$('.form__body_up-top').addClass('d-none');
} else {
	$('.form__body_up-top').removeClass('d-none');
}
});

$('.search_ajax').keyup(function (e) {
	var timeOut = setTimeout( () => {
		var form = $(this);
		var search_val = $('#search_input').val();
		if($('#search_input').val().length >= 3){
			$.post({
				type: "POST",
				url: '/ajax/search',
				data: form.serialize(),
				beforeSend: function(){
					// 	$('.search_form').addClass('v1');
					// 	$('.jspPane').css({"textAlign": "center"}).html('<img src="/assets/img/loading.svg" width="40">');
				},
				success: function(response) {
					// var res = JSON.parse(response);
					$('.sf_ddown_head').css({"display": "block"}).html(response);
					$('.search_form').addClass('v1');
				}
			});
		}
		if($('#search_input_page').val().length < 3){
			$('.sf_ddown_head').css({"display": "none"}).html('');
		}
	}, 5);
});
$('.search_ajax_mob').keyup(function (e) {
	var timeOut = setTimeout( () => {
		var form = $(this);
		var search_val = $('#search_input_mob').val();
		if($('#search_input_mob').val().length >= 3){
			$.post({
				type: "POST",
				url: '/ajax/search',
				data: form.serialize(),
				beforeSend: function(){
					// 	$('.search_form').addClass('v1');
					// 	$('.jspPane').css({"textAlign": "center"}).html('<img src="/assets/img/loading.svg" width="40">');
				},
				success: function(response) {
					// var res = JSON.parse(response);
					$('.sf_ddown_head').css({"display": "block"}).html(response);
					$('.search_form').addClass('v1');
				}
			});
		}
		if($('#search_input_mob').val().length < 3){
			$('.sf_ddown_head').css({"display": "none"}).html('');
		}
	}, 5);

	

});
$('.search_ajax_page').keyup(function (e) {
	var timeOut = setTimeout( () => {
		var form = $(this);
		var search_val = $('#search_input_page').val();
		if($('#search_input_page').val().length >= 3){
			$.post({
				type: "POST",
				url: '/ajax/search',
				data: form.serialize(),
				beforeSend: function(){
					// 	$('.search_form').addClass('v1');
					// 	$('.jspPane').css({"textAlign": "center"}).html('<img src="/assets/img/loading.svg" width="40">');
				},
				success: function(response) {
					// var res = JSON.parse(response);
					if (response) {
						$('.sf_ddown_page').css({"display": "block"}).html(response);
						$('.search_form').addClass('v1');
					} else {
						$('.sf_ddown_page').css({"display": "none"}).html('');
					}
				}
			});
		}

		if($('#search_input_page').val().length < 3){
			$('.sf_ddown_page').css({"display": "none"}).html('');
		}
	}, 5);

	

});