$('.banner-slide').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    pagination: false,
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$('.product-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    pagination: false,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 4
        }
    }
})