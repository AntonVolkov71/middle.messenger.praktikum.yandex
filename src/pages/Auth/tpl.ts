const tpl: string = `
	<form class="auth__form form">
		<h1 class="form__title">{{label}}</h1>

		{{> emailField inputId='auth-email'}}
		{{> firstNameField inputId='auth-first_name'}}
		{{> secondNameField inputId='auth-second_name'}}
		{{> loginField inputId='auth-login'}}
		{{> displayNameField inputId='auth-display-name'}}
		{{> phoneField inputId='auth-phone'}}
		{{> passwordField inputId='auth-password' }}
		{{> passwordRepeatField inputId='auth-password-repeat' }}
		
		{{> button id="authApi-submit" classNames="auth__submit" type="submit" label="Зарегистрироваться" }}
		<a class="form__link" href={{linkMain}}>Войти</a>

		<p  class="form__error form__error_form ">{{error}}</p>
	</form>
`;

export default tpl;
