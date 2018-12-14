$(document).ready(function (){
  /* Вызов модального окна */
  $('.navbar__toggle').on('click', function () {
    $(this).next().toggleClass('block');
  });
  $('.navbar__toggle').on('focusout', function () {
    $(this).next().removeClass('block');
  });  
});
