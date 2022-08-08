const tpl = `
<form class="auth__form form">
<p class="form__title">{{label}}</p>

<label class="form__label" for="email">Почта</label>
{{> input id="auth-email" name="email" classNames="form__input" type="email" }}
<span class="form__error form__error_email hidden">Email не настоящий</span>

<label class="form__label" for="first_name">Имя</label>
{{> input id="auth-first_name"  name="first_name" classNames="form__input" type="text"  minlength="1" }}
<span class="form__error form__error_first_name hidden">Первая заглавная, без пробелов и без цифр, можно добавить дефис</span>

<label class="form__label" for="second_name">Фамилия</label>
{{> input id="auth-second_name"  name="second_name" classNames="form__input" type="text"  minlength="1" }}
<span class="form__error form__error_second_name hidden">Первая заглавная, без пробелов и без цифр, можно добавить дефис</span>

<label class="form__label" for="login">Логин</label>
{{> input id="auth-login" name="login" classNames="form__input" type="text" value="Anton" minlength="3" maxlength="20"}}
<span class="form__error form__error_login hidden">Логин должен содержать цифры (но полностью не состоять из них), буквы, длина от 3 до 20 символов</span>

<label class="form__label" for="phone">Телефон</label>
{{> input id="auth-phone"  name="phone" classNames="form__input" type="tel" required="required"  minlength="8" maxlength="15"}}
<span class="form__error form__error_phone hidden">Начинаться должен с + либо 8, от 10 до 15 цифр, без скобок</span>

<label class="form__label" for="password">Пароль</label>
{{> input id="auth-password"  name="password" classNames="form__input" type="password"  minlength="8" maxlength="40" value="A12345678"}}
<span class="form__error form__error_password hidden">Пароль должен состоять из одной заглавной буквы и цифры, длина от 8 до 40 символов</span>

<label class="form__label" for="password_repeat">Пароль (еще раз)</label>
{{> input id="auth-password-more"  name="password_repeat" classNames="form__input" type="password"  minlength="8" maxlength="40" }}
<span class="form__error form__error_password_repeat hidden">Не совпадают</span>

{{> button id="auth-submit" classNames="auth__submit" type="submit" label="Зарегистрироваться" }}
<a class="form__link" href="/login">Войти</a>
<p  class="form__error form__error_form hidden ">Не все поля корректные</p>

</form>
`;

export default tpl;
