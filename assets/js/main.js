$(document).ready(function($) {
    "use strict";
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    // Banner slider
    var $companiesSlider = $(".home-slider");
    $companiesSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayTimeout: 7000,
        smartSpeed: 5000,
        autoplay: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1399: {
                items: 1,
            },
        }
    });

    // Magnific popup
    $('.videos-icon').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',

                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }

            },
            srcAction: 'iframe_src',
        }
    });
   



}(jQuery));