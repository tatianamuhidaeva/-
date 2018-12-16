$(document).ready(function (){
  /* Гамбургер-меню */
  $('.navbar__toggle').on('click', function () {
    $(this).next().toggleClass('block');
  });
  
  $(document).mouseup(function (e) {
    var toggle = $(".navbar__toggle");
    var menu = $(toggle.next());
    if ((toggle.has(e.target).length === 0) && (menu.has(e.target).length === 0)){
      menu.removeClass('block');
    }
  });  

  /* контакты на средних экранах открываются по клику */
  $( window ).resize(function() {
  if (($(window).width() <= '768') || ($(window).width() >= '992')){
    $('.navbar-contacts').show();
  } else{
    $('.navbar-contacts').hide();
  }
});
  $('.navbar-contacts__icon').on('click', function () {
    console.log('click');
    if (($(window).width() > '768') && ($(window).width() <= '992')){
      $(this).next().toggle("slow");
    }
  });
});

