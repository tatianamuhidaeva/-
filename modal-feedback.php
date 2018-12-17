<form action="#" class="feedback__form form-submit">
  <div class="feedback__form-group">
    <div class="feedback__input-wrap">
      <input type="text" class="feedback__input input input-name" id="user__name" name="user__name" placeholder="Ваше имя..." required>
      <div class="error error-name"></div>
    </div>
    <div class="feedback__input-wrap">
      <input type="tel" class="feedback__input input input-tel" id="user__tel" name="user__tel" placeholder="Ваш номер телефона..." pattern="\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}" required>
      <div class="error error-phone"></div>
    </div>
    <div class="feedback__input-wrap">
      <input type="email" class="feedback__input input input-email" id="user__email" name="user__email" placeholder="Ваш e-mail..." pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}" required>
      <div class="error error-email"></div>
    </div>
  </div>
  <textarea class="feedback__textarea textarea" name="user__message" id="user__message" cols="30" rows="10" placeholder="Ваше сообщение..."></textarea>
  <button class="feedback__btn btn-submit btn" type="submit">арендовать баню!</button>
</form>
