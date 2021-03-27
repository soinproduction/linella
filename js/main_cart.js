(function () {

    /* Go to cart */
    $('body').on('click', '.header__basket', function (e) {
        var url = $(this).data('url');
        $(location).attr('href', url);
    });
    /* Set quantity */
    $('body').on('click', '.setcount .setcount__minus,.setcount  .setcount__plus', function (e) {
        e.preventDefault();

        var max_count = 1;
        if ($(this).closest('.setcount').attr('data-max_count')) {
            max_count = $(this).closest('.setcount').attr('data-max_count');
        }

        var qty = parseInt($(this).closest('.setcount').find('.setcount__current input[name="quantity"]').val());
        if ($(this).hasClass('setcount__minus')) {
            if (qty > 1) {
                qty = qty - 1;
            }
        } else {
            if (qty < max_count) {
                qty = qty + 1;
            }
        }

        if ($(this).closest('.basket__item').length) {
            update_cart($(this).closest('.basket__item'), qty);
        }

        //$(this).closest('.setcount').find('.setcount__current span').html(qty);
        $(this).closest('.setcount').find('.setcount__current input[name="quantity"]').val(qty);
    });

    $('body').on('change', 'input[name="quantity"]', function (e) {
        e.preventDefault();

        var max_count = 1;
        if ($(this).closest('.setcount').attr('data-max_count')) {
            max_count = $(this).closest('.setcount').attr('data-max_count');
        }

        var qty = parseInt($(this).val());
        if ($(this).closest('.basket__item').length) {
            update_cart($(this).closest('.basket__item'), qty);
        }
    });

    /* Update Cart */
    function update_cart(item, qty) {
        $.post('/cart/update', {rowid: item.attr('data-rowid'), quantity: qty}, function (r) {
            if (r.status == 'ok') {
                $('.header__acclist .cart .i-count').text(r.total_items);
                $('.start-order__total span:eq(0)').text(r.cart_total);

                $('.basket__item[data-rowid="' + r.item.rowid + '"] .basket__total span:eq(0)').text(r.item.subtotal);
            }
        }, 'json');
    }

    /* add to cart */
    $('body').on('click', '.button_buy', function (e) {
        e.preventDefault();
        var button = $(this);
        var url_add = button.data('action');
        var product_id = button.data('product_id');
        var cart = button.data('cart');
        var input_quantity = $('input[name=quantity]').val();
        var quantity = button.data('quantity');
        $('.add_cart_success').addClass('active_success');
        $.ajax({
            url: url_add, // путь к обработчику
            type: 'POST', // метод отправки,
            dataType: 'json',
            data: {product_id: product_id, quantity: quantity},
            success: function (data) {
                $('.cart_total').html(data.cart_total + ' MDL');
                $('.total_items').html(data.total_items);
                $('.add_cart_success').removeClass('active_success');
                setTimeout(function () {
                    if (cart == 1) {
                        location.reload();
                    }
                }, 2000);
            },
            error: function (data) {
                console.log(data); // выводим ошибку в консоль
            }
        });
    });

    $('body').on('click', '.button_buy_shop_list', function (e) {
        e.preventDefault();
        var button = $(this);
        var url_add = button.data('action');
        var product_id = button.data('product_id');
        var cart = button.data('cart');
        var quantity = $('.input__count[name='+product_id+'_qty]').val();
        $('.add_cart_success').addClass('active_success');
        $.ajax({
            url: url_add, // путь к обработчику
            type: 'POST', // метод отправки,
            dataType: 'json',
            data: {product_id: product_id, quantity: quantity},
            success: function (data) {
                $('.cart_total').html(data.cart_total + ' MDL');
                $('.total_items').html(data.total_items);
                $('.add_cart_success').removeClass('active_success');
                setTimeout(function () {
                    if (cart == 1) {
                        location.reload();
                    }
                }, 2000);
            },
            error: function (data) {
                console.log(data); // выводим ошибку в консоль
            }
        });
        $.ajax({
            url: '/add_shop_list_bay', // путь к обработчику
            type: 'POST', // метод отправки,
            dataType: 'json',
            data: {product_id: product_id },
            success: function (data) {
                $('#lab'+product_id).attr( 'checked', true );
            },
            error: function (data) {
                console.log(data); // выводим ошибку в консоль
            }
        });
    });

    $('body').on('click', '.button_buy_item', function (e) {
        e.preventDefault();
        var button = $(this);
        var url_add = button.data('action');
        var product_id = button.data('product_id');
        var quantity = $('input[name=quantity]').val();
        $('.add_cart_success').addClass('active_success');
        $.ajax({
            url: url_add, // путь к обработчику
            type: 'POST', // метод отправки,
            dataType: 'json',
            data: {product_id: product_id, quantity: quantity},
            success: function (data) {
                $('.cart_total').html(data.cart_total + ' MDL');
                $('.total_items').html(data.total_items);
                $('.add_cart_success').removeClass('active_success');
            },
            error: function (data) {
                console.log(data); // выводим ошибку в консоль
            }
        });
    });

    $('body').on('click', '.delete_product_cart', function (e) {
        e.preventDefault();
        var rowid = $(this).data('rowid');
        var id = $(this).data('id');
        swal({
            title: "Sigur doriți să ștergeți elementul?",
            type: "info",
            showCancelButton: true,
            cancelButtonText: "Nu",
            confirmButtonText: "Da",
            confirmButtonColor: "#e30613",
            cancelButtonColor: "#999999",
            reverseButtons: true,
            focusConfirm: false,
            focusCancel: true
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.value) {
                $.ajax({
                    url: '/cart/delete', // путь к обработчику
                    type: 'POST', // метод отправки,
                    dataType: 'json',
                    data: {rowid: rowid, id: id},
                    success: function (data) {
                        data.cart_total = data.cart_total.split(' ').join('');
                        var cart_total = Number(data.cart_total);
                        cart_total_b = cart_total.toFixed(2).split('.')[1];
                        $('.cart_total').html(cart_total + ' MDL');
                        $('.total_items').html(data.total_items);
                        $('.total_price').html(`${Math.floor(cart_total)} <sup>${cart_total_b}</sup>`);
                        $('#item-' + data.product_id).hide();
                        console.log(data);
                    },
                    error: function (data) {
                        console.log(data); // выводим ошибку в консоль
                    }
                });
            } else {
            }
        });
    });
    // $.post(url_add, {product_id: product_id, quantity: quantity}, function(data){
    //     alert(data.cart_total);
    // }, 'json');
    function add_to_cart_without_product(button) {
        var success_back_color = '#009688';
        var back_color = '#121212';

        $.post(button.attr('data-action'), {product_id: button.attr('data-product_id'), quantity: 1}, function (r) {
            if (r.status == 'ok') {
                var old_text = button.text();
                button.text(button.attr('data-added'));
                button.animate({backgroundColor: success_back_color}, "slow");

                setTimeout(function () {
                    button.text(old_text);
                    button.animate({backgroundColor: back_color}, "slow");
                }, 2000);

                $('.header__acclist .cart .i-count').text(r.total_items).show();
            }
        }, 'json');
    }

    function add_to_cart(form) {
        var button = form.find('.button_buy');
        var success_back_color = '#009688';
        var back_color = '#121212';

        $.post(form.attr('action'), form.serialize(), function (r) {
            if (r.status == 'ok') {
                var old_text = button.text();
                button.text(button.attr('data-added'));
                button.animate({backgroundColor: success_back_color}, "slow");

                setTimeout(function () {
                    button.text(old_text);
                    button.animate({backgroundColor: back_color}, "slow");
                }, 2000);

                $('.header__acclist .cart .i-count').text(r.total_items).show();
                $('input[name="quantity"]').val(1);
            }
        }, 'json');
    }

    /* Remove from cart */
    $('body').on('click', '.basket__remove', function (e) {
        e.preventDefault();

        var item = $(this).closest('.basket__item');
        var rowid = item.attr('data-rowid');

        $.post('/cart/delete', {rowid: rowid}, function (r) {
            if (r.status == 'ok') {
                // $('.cart_subtotal span').text(r.cart_subtotal);
                // $('.cart_delivery span').text(r.delivery_price);
                // $('.cart_total span').text(r.cart_total);
                //
                // $('.h_cart .num span').text(r.total_items);
                // $('.total_items span').text(r.total_items);

                if (r.total_items == 0) {
                    window.location.reload();
                }

                $('.header__acclist .cart .i-count').text(r.total_items);
                $('.start-order__total span:eq(0)').text(r.cart_total);
                item.remove();
            }
        }, 'json');
    });


    /* Fix footer padding */
    function fixFooter() {
        var height = $(".footer-container").outerHeight();
        $(".page-container").css("padding-bottom", height + "px");
    }

    $(window).resize(fixFooter);
    $(document).ready(function () {
        fixFooter();

        /* Open submenu in mobile menu */
        $(".nav-list__item_sub > a").on("click", function (e) {
            e.preventDefault();
            $(this)
                .siblings(".nav-list__submenu")
                .toggleClass("nav-list__submenu_open");
        });

        /* Open mobile menu */
        $(".hamburger").on("click", function () {
            $(this).toggleClass("hamburger_open");
            $(".header").slideToggle(500, function () {
                if ($(".header").css("display") == "none") {
                    $("header").attr("style", "");
                }
            });
            $(".header").toggleClass("header_show-mobile");

            if ($(".header").hasClass("header_show-mobile")) {
                jQuery("body").swipe({
                    swipe: function (
                        event,
                        direction,
                        distance,
                        duration,
                        fingerCount,
                        fingerData
                    ) {
                        if (direction == "up" && distance < 200 && duration < 190) {
                            $(".header").slideUp();
                            $(".hamburger").removeClass("hamburger_open");
                            $(".header").removeClass("header_show-mobile");
                        }
                    }
                });
            }
        });

        /* Calatog sort menu */
        $(".optview__sort > a").on("click", function (e) {
            e.preventDefault();
            $(this)
                .siblings(".optview__sort-list")
                .fadeToggle();
        });

        /* Drop list */
        $(".droplist__header").on("click", function () {
            // $(this).parents('.droplist').find('.droplist__item_open').removeClass('droplist__item_open').find('.droplist__content').slideUp();
            var item = $(this).parent();
            // .toggleClass('droplist__item_open');
            if (item.hasClass("droplist__item_open")) {
                $(this).removeClass("droplist__header_open");
                $(this)
                    .siblings(".droplist__content")
                    .slideUp(500, function () {
                        item.removeClass("droplist__item_open");
                    });
            } else {
                $(this).addClass("droplist__header_open");
                $(this)
                    .siblings(".droplist__content")
                    .slideDown(500, function () {
                        item.addClass("droplist__item_open");
                    });
            }
        });
        /* Currency menu */
        $(".currency__current").on("click", function (e) {
            e.preventDefault();
            $(this)
                .siblings(".currency__list")
                .fadeToggle();
        });

        /* Catalog options mobile drop menu */
        $(".catalog__aside .toggle-slide").on("click", function () {
            $(".catalog__optlist").slideToggle(function () {
                if ($(this).css("display") == "none") {
                    $(this).removeAttr("style");
                }
            });
        });

        $(".scroll-info").on("click", function () {
            var position =
                $(".prod-full-info").offset().top -
                ($(".mobile-header__content").outerHeight() + 20);
            $("html, body").animate(
                {
                    scrollTop: position
                },
                1000
            );
        });
    });
})();
