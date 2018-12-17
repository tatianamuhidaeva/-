<?php include('head.php') ?>
  <title>Балаклава | Контакты</title>
  <link rel="stylesheet" href="css/contacts_style.css">
  <script src='https://www.google.com/recaptcha/api.js'></script>
  <script src="https://api-maps.yandex.ru/2.1/?apikey=123&load=package.full&lang=ru_RU&onload=init"></script>  
  <script src="/balaclava/js/mapsapi-round-controls.js"></script>  
  <script src="/balaclava/js/map.js"></script>  
</head>
  <?php include('navbar.php'); ?>
  <section class="description">
    <div class="container">
      <h2 class="description__title">Контакты</h2>
      <p class="description__paragraph">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
    </div>        
  </section>
  <section class="map">      
        <div class="map-info">
          <div class="map__text">
            <p>Россия, Крым, г. Балаклава
                <br>“Гостевой дом с орлами”</p>
            <ul class="map__contacts">
              <li class="map__contact map__contact-time">Пн.-СБ.: 09:00–18:00</li>
              <li class="map__contact map__contact-mail"><a href="mailto:info@rus-sauna.com">info@rus-sauna.com</a></li>
              <li class="map__contact map__contact-phone"><a href="tel:80765767667">8 (0765) 76 76 67</a></li>
            </ul>
          </div>
          <div  class="map__img">
            <img src="img/welcome/1.png" alt="Гостевой дом с орлами">
          </div>
        </div>
      
      <div class="map-container" id="map"></div>    
  </section>
  <section class="feedback-socials">
    <div class="container feedback-socials-wrap">
      <div class="feedback">
        <h2 class="feedback-socials__title">Обратная связь</h2>
        <form action="#" class="feedback__form form-submit">
          <div class="feedback__form-group">
            <div class="feedback__input-wrap">
              <input type="text" class="feedback__input input input-name" id="user__name" name="user__name" placeholder="Ваше имя..." required>
              <div class="error error-name"></div>
            </div>
            <input type="hidden" class="is-callback" name="is-callback" value="is-callback">
            <input type="hidden" class="feedback__input input input-tel" id="user__tel" name="user__tel" placeholder="Ваш номер телефона..." value="+7(000)000-00-00">
            <div class="feedback__input-wrap">
              <input type="email" class="feedback__input input input-email" id="user__email" name="user__email" placeholder="Ваш e-mail..." pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}" required>
              <div class="error error-email"></div>
            </div>
          </div>
          <textarea class="feedback__textarea textarea" name="user__message" id="user__message" cols="30" rows="10" placeholder="Ваше сообщение..."></textarea>
          <div class="feedback__btn-wrap">
            <div class="feedback__recaptcha g-recaptcha" data-callback="recaptchaCallback" data-sitekey="6Lc0I4IUAAAAAFN6UXlibY25MgfI9LxrS00O2BqB"></div>
            <button class="feedback__btn btn-submit btn" type="submit" disabled>Отправить</button>
          </div>
        </form>
      </div>
      <div class="socials">
        <h2 class="feedback-socials__title">Мы в соцсетях</h2>
        <div class="socials-wrap">
          <a href="#" class="socials__href socials__href-vk">ВКОНТАКТЕ</a>
          <a href="#" class="socials__href socials__href-fb">facebook</a>
          <a href="#" class="socials__href socials__href-gg">Google +</a>
        </div>
      </div>
    </div> <!-- end feedback -->
  </section>
  <?php include('modal-success.php'); ?>
  <?php include('footer.php'); ?>

  <script src="/balaclava/js/callModalWindow.js"></script>    
  <script src="/balaclava/js/validate-and-sendMail.js"></script>    
  <script src="/balaclava/js/recaptcha-handler.js"></script>    
<body>
</body>
</html>  