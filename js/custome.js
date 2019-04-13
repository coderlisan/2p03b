

$(document).ready(function () {

$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    nav:true,
    navText:['<i class="fa fa-arrow-left fa-1x"></i>','<i class="fa fa-arrow-right fa-1x"></i>'],
    merge:true,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    }
});

})


   // $('.slider-active').owlCarousel({
   //    loop: true,
   //    margin: 10,
   //    nav: true,
   //    responsive: {
   //       0: {
   //          item: 1
   //       },
   //       600: {
   //          item: 1
   //       },
   //       1000: {
   //          item: 1
   //       }
   //    }
   // })