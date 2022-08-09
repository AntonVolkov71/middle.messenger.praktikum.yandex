const tpl = `
<div class="profile__wrapper-avatar">
<img src="{{avatar}}" alt="my photo" class="profile__image">
<div class="profile__change-avatar"> Поменять аватар</div>
</div>

{{#if inputFile}}
{{{inputFile}}}
{{/if}}
<h2 class="profile__name">{{name}}</h2>

{{#if changePassword}}
<form class="form profile__change-password">

<label class="form__label" for="password_old">
Старый пароль
</label>
{{> input id='profile-password_old' classNames="form__input" value=oldPassword name='password_old' type='password'  minlength="8" maxlength="40" required=true }}
<span class="form__error form__error_password_old hidden">А ты ли это? Не угадал старенький паролик</span>

<label class="form__label" for="password">
Новый пароль
</label>
{{> input id='profile-password_new' classNames="form__input" name='password' type='password'  minlength="8" maxlength="40" required=true value=''}}
<span class="form__error form__error_password hidden">Пароль должен состоять из одной заглавной буквы и цифры, длина от 8 до 40 символов</span>

<label class="form__label" for="password_repeat">
Повторите новый пароль
</label>
{{> input id='profile-repeat-new-password' classNames="form__input" name='password_repeat' type='password'  minlength="8" maxlength="40" required=true value=''}}
<span class="form__error form__error_password_repeat ">Не смог повторить, ай яй яй.</span>

{{#unless  isShow}}
{{> button type='submit' classNames='profile__button-save-password' label='Сохранить' }}
<span  class="form__error form__error_form hidden" name="form__error_form"">Вообще не попал...</span>
{{/unless }}
</form>

{{else}}

<form class="form profile__data">
<label class="form__label" for="email">Почта</label>
{{> input id="profile-email" name="email" classNames="form__input" disabled=isShow type="email" value=email}}
<span class="form__error form__error_email hidden">Email не настоящий</span>

<label class="form__label" for="login">Логин</label>
{{> input id="profile-login" name="login" classNames="form__input" disabled=isShow type="text" value=login minlength="3" maxlength="20"}}
<span class="form__error form__error_login hidden">Логин должен содержать цифры (но полностью не состоять из них), буквы, длина от 3 до 20 символов</span>

<label class="form__label" for="first_name">Имя</label>
{{> input id="auth-first_name"  name="first_name" classNames="form__input" value=name type="text" disabled=isShow minlength="1" required=true}}
<span class="form__error form__error_first_name hidden">Первая заглавная, без пробелов и без цифр, можно добавить дефис</span>

<label class="form__label for="second_name">Фамилия</label>
{{> input id="profile-second_name" value=secondName name="second_name" classNames="form__input" type="text" disabled=isShow minlength="1"  required=true}}
<span class="form__error form__error_second_name hidden">Первая заглавная, без пробелов и без цифр, можно добавить дефис</span>

<label class="form__label" for="name_in_chat">Имя в чате</label>
{{> input id="profile-login" value=nameInChat name="name_in_chat" classNames="form__input" disabled=isShow type="text" minlength="3" maxlength="20"}}
<span class="form__error form__error_name_in_chat hidden">Имя в чате должно содержать цифры (но полностью не состоять из них), буквы, длина от 3 до 20 символов</span>

<label class="form__label" for="phone">Телефон</label>
{{> input id="profile-phone" value=phone name="phone" classNames="form__input" type="tel" required="required" disabled=isShow minlength="8" maxlength="15"}}
<span class="form__error form__error_phone hidden">Начинаться должен с + либо 8, от 10 до 15 цифр, без скобок</span>

{{#unless  isShow}}
{{> button type='submit' classNames='profile__button-save' label='Сохранить' }}
{{/unless }}
<span  class="form__error form__error_form hidden ">А ты хорошо подумал...</span>

</form>
{{#if isShow}}
<p data-profile="change-profile" class="profile__change-data">Изменить данные</p>
<p data-profile="change-password" class="profile__button-change-password">Изменить пароль</p>

<p data-profile="exit-profile" class="profile__signout">Выйти</p>
{{/if}}
{{/if}}
`;

export default tpl;
