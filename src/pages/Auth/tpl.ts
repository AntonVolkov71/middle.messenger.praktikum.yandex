const tpl: string = `
	<form class="auth__form form">
		<p class="form__title">{{label}}</p>

		{{{fieldFormEmail}}}
		{{{fieldFormFirstName}}}
		{{{fieldFormSecondName}}}
		{{{fieldFormLogin}}}
		{{{fieldFormPhone}}}
		{{{fieldFormNameInChat}}}
		{{{fieldFormPassword}}}
		{{{fieldFormPasswordRepeat}}}
		
		{{> button id="auth-submit" classNames="auth__submit" type="submit" label="Зарегистрироваться" }}
		<a class="form__link" href="/">Войти</a>
		<p  class="form__error form__error_form hidden ">Не все поля корректные</p>
	</form>
`;

export default tpl;
