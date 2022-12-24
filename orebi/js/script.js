$(document).ready(function(){

// slider start
$('.slider-content').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear'
});

// arrival start
$('.arrivals-content').slick({
  dots: false,
  infinite: true,
  speed: 300,
  prevArrow:'<i class="fa fa-arrow-circle-left prev" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-arrow-circle-right next" aria-hidden="true"></i>',
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
				


});