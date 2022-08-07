const tpl = `
			<form class="login__form form">
					<p class="form__title">{{label}}</p>
	
					<label class="form__label" for="login">Логин</label>
					{{> input id="login-input" name="login" classNames="form__input" type="text" value="Anton" minlength="3" maxlength="20"}}
					<span class="form__error form__error_login hidden">Логин должен содержать цифры (но полностью не состоять из них), буквы, длина от 3 до 20 символов</span>
	
					<label class="form__label" for="password">Пароль</label>
					{{> input id="password-input"  name="password" classNames="form__input" type="password"  minlength="8" maxlength="40" value="A12345678" }}
					<span class="form__error form__error_password hidden">Пароль должен состоять из одной заглавной буквы и цифры, длина от 8 до 40 символов</span>
	
					{{> button id="login-submit" classNames="login__submit" type="submit" label="Войти" }}

					<a class="form__link" href="/auth">Зарегистрироваться</a>
					<p  class="form__error form__error_form hidden ">Не угадал ни пароль ни логин</p>
			</form>
	`;

export default tpl;
