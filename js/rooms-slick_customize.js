$(document).ready(function (){
  $('#rooms-slider-box1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    asNavFor: '#rooms-slider-nav1',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          swipe: true
        }
      }
    ]       
  });
  $('#rooms-slider-nav1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
    asNavFor: '#rooms-slider-box1',
    focusOnSelect: true,
    prevArrow: '<div class="arrow arrow-prev"></div>',
    nextArrow: '<div class="arrow arrow-next"></div>',
    responsive: [
      {
        breakpoint: 1095,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipe: false
        }
      },
      {
        breakpoint: 768,
        settings: {
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

  $('#rooms-slider-box2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    asNavFor: '#rooms-slider-nav2',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          swipe: true
        }
      }
    ]       
  });
  $('#rooms-slider-nav2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
    asNavFor: '#rooms-slider-box2',
    focusOnSelect: true,
    prevArrow: '<div class="arrow arrow-prev"></div>',
    nextArrow: '<div class="arrow arrow-next"></div>',
    responsive: [
      {
        breakpoint: 1095,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipe: false
        }
      },
      {
        breakpoint: 768,
        settings: {
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
  
  $('#rooms-slider-box3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    asNavFor: '#rooms-slider-nav3',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          swipe: true
        }
      }
    ]       
  });
  $('#rooms-slider-nav3').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
    asNavFor: '#rooms-slider-box3',
    focusOnSelect: true,
    prevArrow: '<div class="arrow arrow-prev"></div>',
    nextArrow: '<div class="arrow arrow-next"></div>',
    responsive: [
      {
        breakpoint: 1095,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipe: false
        }
      },
      {
        breakpoint: 768,
        settings: {
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
  
  $('#rooms-slider-box4').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    asNavFor: '#rooms-slider-nav4',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          swipe: true
        }
      }
    ]       
  });
  $('#rooms-slider-nav4').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
    asNavFor: '#rooms-slider-box4',
    focusOnSelect: true,
    prevArrow: '<div class="arrow arrow-prev"></div>',
    nextArrow: '<div class="arrow arrow-next"></div>',
    responsive: [
      {
        breakpoint: 1095,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipe: false
        }
      },
      {
        breakpoint: 768,
        settings: {
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
  
  $('#rooms-slider-box5').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    asNavFor: '#rooms-slider-nav5',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          swipe: true
        }
      }
    ]       
  });
  $('#rooms-slider-nav5').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
    asNavFor: '#rooms-slider-box5',
    focusOnSelect: true,
    prevArrow: '<div class="arrow arrow-prev"></div>',
    nextArrow: '<div class="arrow arrow-next"></div>',
    responsive: [
      {
        breakpoint: 1095,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipe: false
        }
      },
      {
        breakpoint: 768,
        settings: {
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
