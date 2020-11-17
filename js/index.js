
$(".js-video-button").modalVideo({
    youtube: {
        controls: 0,
        nocookie: true
    }
});

// <!--Carousel - students-- >
$('.comment__carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        // 600: {
        //     items: 3
        // },
        // 1000: {
        //     items: 4
        // },
        // 1440: {
        //     items: 6
        // },
    }
})
// Project Carousel
$('.project__carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
    }
})

// Service Carousel
$('.service__carousel').owlCarousel({

    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },
        1440: {
            items: 5
        },
    }
})
// Scroll menu layer 2
$(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
        $('header').addClass('headerClass1');
    } else {
        $('header').removeClass('headerClass1');
    };

    // Đổi màu chữ
    if ($(window).scrollTop() > 1) {
        $('.header__left').addClass('change_color1');
    } else {
        $('.header__left').removeClass('change_color1');
    };
    if ($(window).scrollTop() > 1) {
        $('.fiver__menu').addClass('change_color2');
    } else {
        $('.fiver__menu').removeClass('change_color2');
    };

    // Hiện input group
    if ($(window).scrollTop() > 1) {
        $('.input-group').addClass('visibleInput');
    } else {
        $('.input-group').removeClass('visibleInput');
    };

    // Hiện Menu layer 2
    if ($(window).scrollTop() > 400) {
        $('.menu_layer2').addClass('headerClass');
    } else {
        $('.menu_layer2').removeClass('headerClass');
    };

    // Thêm viền cho thẻ hr
    if ($(window).scrollTop() > 400) {
        $('header').addClass('headerHr');
    } else {
        $('header').removeClass('headerHr');
    };


})