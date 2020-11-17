
$(".js-video-button").modalVideo({
    youtube: {
        controls: 0,
        nocookie: true
    }
});

// // Carousel-students
// $('.services__carousel').owlCarousel({

//     loop: true,
//     margin: 10,
//     nav: true,
//     dots: false,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 5
//         },
//         // 1440: {
//         //     items: 6
//         // },
//     }
// })


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
