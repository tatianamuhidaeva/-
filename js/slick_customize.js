$(document).ready(function (){
  $('.slider-box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    asNavFor: '.slider-nav',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          swipe: true
        }
      }
    ]       
  });
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    swipe: false,
    // centerMode: true,
    // variableWidth: true,
    asNavFor: '.slider-box',
    focusOnSelect: true,
    prevArrow: '<div class="arrow arrow-prev"></div>',
    nextArrow: '<div class="arrow arrow-next"></div>',
    responsive: [
      {
        breakpoint: 1095,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          swipe: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          swipe: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          swipe: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipe: true
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipe: true
        }
      }
    ]    
  });
});
