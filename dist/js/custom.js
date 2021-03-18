const prevIcon = '<img src="dist/images/arrow-prev.svg"class="prev-arrow">';
const nextIcon = '<img src="dist/images/arrow-next.svg"class="next-arrow">';

$('.banner-slide').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
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
            items: 1
        }
    }
})
$('.product-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        prevIcon, nextIcon
    ],
    dots: false,
    pagination: false,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        800: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})


/*accordion*/
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function() {
        this.classList.toggle('is-open');

        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            // accordion is currently open, so close it
            content.style.maxHeight = null;
        } else {
            // accordion is currently closed, so open it
            content.style.maxHeight = content.scrollHeight + "$px";
        }
    }
}
/*accordion*/

/*
var baner_slider = document.querySelector(".banner-slider");
if (baner_slider != null) {
    var swiper = new Swiper('.banner-slider', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 1000,
        autoplay: {
            delay: 3500,
        },
        disableOnInteraction: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-right',
            prevEl: '.swiper-button-left-arrow',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 5,
            }
        }
    });
}*/