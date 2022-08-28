const tpl: string = `
	<div class="profile__wrapper-avatar">
		<img
			{{#if user.avatar}} src="{{apiResource}}{{user.avatar}}" {{/if}}
			 alt="my photo" class="profile__image">
		<div class="profile__change-avatar"> Поменять аватар</div>
	</div>
	
	{{#if isOpenChangeAvatar}}
		{{{inputFile}}}
	{{/if}}

	<h2 class="profile__name">{{user.first_name}}</h2>

	{{#if isChangePassword}}
		<form class="form profile__change-password">
			{{> passwordOldField inputId='profile-password-old'}}
			{{> passwordField inputId='profile-password'}}
			{{> passwordRepeatField inputId='profile-password-repeat'}}

			{{#unless  isShow}}
			{{> button type='submit' classNames='profile__button-save-password' label='Сохранить' }}
			
			<span  class="form__error form__error_form hidden" name="form__error_form"">Вообще не попал...</span>
			{{/unless }}
		</form>
	
	{{else}}
		<form class="form profile__data">
			{{> emailField disabled=isShow email=user.email  inputId='profile-email'}}
			{{> loginField disabled=isShow login=user.login  inputId='profile-login'}}
			{{> firstNameField disabled=isShow first_name=user.first_name  inputId='profile-first-name'}}
			{{> secondNameField disabled=isShow second_name=user.second_name  inputId='profile-second-name'}}
			{{> phoneField disabled=isShow phone=user.phone  inputId='profile-phone'}}
			{{> displayNameField disabled=isShow display_name=user.display_name inputId='profile-display-name'}}

			{{#unless  isShow}}
			{{> button type='submit' classNames='profile__button-save' label='Сохранить' }}
			{{/unless }}
		
			<p  class="form__error form__error_form ">{{error}}</p>

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
