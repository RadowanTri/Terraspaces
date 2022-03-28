$(document).ready(function($) {
    "use strict";
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $("#header").addClass("fixed-nav");
        } else {
            $("#header").removeClass("fixed-nav");
        }
    });
    // partner slider
    var $partnerSlider = $(".partner-slider");
    $partnerSlider.owlCarousel({
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
                items: 2,
            },
            992: {
                items: 2,
            },
            1399: {
                items: 3,
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