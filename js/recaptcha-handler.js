function recaptchaCallback() {
  $('.feedback__btn').removeAttr('disabled');
};
// $(document).ready(function (){
//   console.log(grecaptcha);
//   $(".feedback__recaptcha").click(function() {
// var response = grecaptcha.getResponse();

// if(response.length == 0){
//   console.log('reCaptcha not verified');
//   $('.feedback__btn').attr('disabled', 'disabled');
// }
//     //

// else{
//   console.log('reCaptch verified');
//   $('.feedback__btn').removeAttr('disabled');
// }
//     //
// });
// })
// grecaptcha.ready(function() {
//   grecaptcha.execute('reCAPTCHA_site_key', {action: 'homepage'}).then(function(token) {
//      ...
//   });
// });