/*const prevIcon = '<img src="dist/images/arrow-prev.svg"class="prev-arrow">';
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
*/

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
var bnr_slider = document.querySelector(".banner-slider");
if (bnr_slider != null) {
    var Myswiper = new Swiper('.banner-slider', {
        spaceBetween: 30,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
}


var prct_slider = document.querySelector(".prdct-slider");
if (prdct_slider != null) {
    var Myswiper = new Swiper('.prdct-slider', {
        slidesPerView: 4,
            autoplay: {
                delay: 3500,
            },
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next.next-arrow',
                prevEl: '.swiper-button-prev.prev-arrow',
            },
            breakpoints: {

                100: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                },

                300: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                600: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                },
                800: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                }
            }
    });
}





*/
/**tab */


$(document).ready(function() {
    var previousActiveTabIndex = 0;

    $(".tab-switcher").on('click keypress', function(event) {
        // event.which === 13 means the "Enter" key is pressed

        if ((event.type === "keypress" && event.which === 13) || event.type === "click") {

            var tabClicked = $(this).data("tab-index");

            if (tabClicked != previousActiveTabIndex) {
                $("#allTabsContainer .tab-container").each(function() {
                    if ($(this).data("tab-index") == tabClicked) {
                        $(".tab-container").hide();
                        $(this).show();
                        previousActiveTabIndex = $(this).data("tab-index");
                        return;
                    }
                });
            }
        }
    });
});

/**tab */