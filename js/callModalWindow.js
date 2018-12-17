$(document).ready(function (){
  /* Русская баня. Сообщение об успешной отправке*/
  $('.close').on('click', function () {
    $('.modal-success').toggleClass('flex');
  });

  /* Главная, Номера. Отправка заявки */
  $('.main__btn').on('click', function () {
    $('.feedback-index').toggleClass('flex');
  });
  $('.rooms__btn').on('click', function () {
    $('.feedback-index').toggleClass('flex');
  });
  $('.feedback-index__close').on('click', function () {
    $('.feedback-index').toggleClass('flex');
  });

/* Если кликать вне диалога, коно закроется */
  // $(document).mouseup(function (e) {
  //   var toggle = $(".modal-success-wrap");
  //   // var menu = $(toggle.next());
  //   if ((toggle.has(e.target).length === 0) && (menu.has(e.target).length === 0)){
  //     menu.removeClass('block');
  //   }
  // });  
});
