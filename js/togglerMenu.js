$(document).ready(function (){
  /* Вызов модального окна */
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
});
