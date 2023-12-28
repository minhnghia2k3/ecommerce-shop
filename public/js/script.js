// (function ($) {

//     "use strict";

//     var initPreloader = function () {
//         $(document).ready(function ($) {
//             var Body = $('body');
//             Body.addClass('preloader-site');
//         });
//         $(window).load(function () {
//             $('.preloader-wrapper').fadeOut();
//             $('body').removeClass('preloader-site');
//         });
//     }

//     // background color when scroll
//     var initScrollNav = function () {
//         var scroll = $(window).scrollTop();

//         if (scroll >= 200) {
//             $('.navbar.fixed-top').addClass("bg-light");
//         } else {
//             $('.navbar.fixed-top').removeClass("bg-light");
//         }
//     }

//     $(window).scroll(function () {
//         initScrollNav();
//     });


//     // init Chocolat light box
//     var initChocolat = function () {
//         Chocolat(document.querySelectorAll('.image-link'), {
//             imageSize: 'contain',
//             loop: true,
//         })
//     }


//     var initProductQty = function () {

//         $('.product-qty').each(function () {

//             var $el_product = $(this);
//             var quantity = 0;

//             $el_product.find('.quantity-right-plus').click(function (e) {
//                 e.preventDefault();
//                 var quantity = parseInt($el_product.find('#quantity').val());
//                 $el_product.find('#quantity').val(quantity + 1);
//             });

//             $el_product.find('.quantity-left-minus').click(function (e) {
//                 e.preventDefault();
//                 var quantity = parseInt($el_product.find('#quantity').val());
//                 if (quantity > 0) {
//                     $el_product.find('#quantity').val(quantity - 1);
//                 }
//             });

//         });

//     }


// })(jQuery);