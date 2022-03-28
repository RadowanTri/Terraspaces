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

    var $partnerSlider = $(".partner-carousel");
    $partnerSlider.owlCarousel({
        center: true,
        nav: true,
        navText: [
            '<i class="fas fa-long-arrow-alt-left"></i>',
            '<i class="fas fa-long-arrow-alt-right"></i>',
        ],
        dots:false,
        autoplay: false,
          loop:true,
          responsive:{
              0:{
                  items:1,
              },
              600:{
                  items:1,
              },
              992:{
                  items:3,
              },
              1399:{
                  items:3,
              }
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
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }

            },
            srcAction: 'iframe_src',
        }
    });
   



}(jQuery));