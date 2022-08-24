const tpl: string = `
	<form class="login__form form">
		<p class="form__title">{{label}}</p>
		
		{{{fieldFormLogin}}}
		{{{fieldFormPassword}}}
		
		{{> button id="login-submit" classNames="login__submit" type="submit" label="Войти" }}
		
		<a class="form__link" href="/sign-up">Зарегистрироваться</a>
		<p  class="form__error form__error_form hidden ">Не угадал ни пароль ни логин</p>
	</form>
`;

export default tpl;
