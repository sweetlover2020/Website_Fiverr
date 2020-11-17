
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
    items:4,
    nav: true,
    loop:true,
    margin:10,
    merge:true,
    dots: false,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    }
})
// Project Carousel
$('.services__carousel').owlCarousel({
    items:4,
    nav: true,
    loop:true,
    margin:10,
    merge:true,
    dots: false,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
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
            items: 6
        },
    }
})
