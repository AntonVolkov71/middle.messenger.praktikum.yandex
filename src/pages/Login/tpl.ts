const tpl: string = `
	<form class="login__form form">
		<h1 class="form__title">{{label}}</h1>
		
		{{> loginField inputId='login-login'}}
		{{> passwordField inputId='login-password'}}
		
		{{> button id="login-submit" classNames="login__submit" type="submit" label="Войти" }}
		
		<a class="form__link" href={{linkSignUp}}>Зарегистрироваться</a>
		<p  class="form__error form__error_form">{{error}}</p>
	</form>
`;

export default tpl;
