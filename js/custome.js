

$(document).ready(function () {
    // slider-active
    $('.slider-active').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-arrow-left fa-1x"></i>', '<i class="fa fa-arrow-right fa-1x"></i>'],
        merge: true,
        responsive: {
            678: {
                mergeFit: true
            },
            1000: {
                mergeFit: false
            }
        }
    })
    // porject-active
    $('.porject-active').owlCarousel({
        responsiveClass: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 4,
            }
        }
    })
    // magnify-active
    $('.video-popup').magnificPopup({ type: 'video' })
    // function-last-brackets
})


$(document).ready(function () {
    // slider-active
    $('.slider-active').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-arrow-left fa-1x"></i>', '<i class="fa fa-arrow-right fa-1x"></i>'],
        merge: true,
        responsive: {
            678: {
                mergeFit: true
            },
            1000: {
                mergeFit: false
            }
        }
    })
    // porject-active
    $('.porject-active').owlCarousel({
        responsiveClass: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 4,
            }
        }
    })

    // blog-active
    $('.blog-active').owlCarousel({
        responsiveClass: true,
        nav: true,
        navText: ['<i class="fa fa-arrow-left fa-1x"></i>', '<i class="fa fa-arrow-right fa-1x"></i>'],        
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    })
    
        // partner-active
    $('.brand-active').owlCarousel({
        responsiveClass: true,
        nav: false,    
        loop: true,
        dots:false,
        margin:50,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 6,
            }
        }
    })

    // magnify-active
    $('.video-popup').magnificPopup({ type: 'iframe' })
    // function-last-brackets
})
