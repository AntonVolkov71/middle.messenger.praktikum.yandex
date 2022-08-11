const tpl: string = `
	<div class="profile__wrapper-avatar">
		<img src="{{myProfile.avatar}}" alt="my photo" class="profile__image">
		<div class="profile__change-avatar"> Поменять аватар</div>
	</div>
	
	{{#if inputFile}}
		{{{inputFile}}}
	{{/if}}
	
	<h2 class="profile__name">{{myProfile.name}}</h2>
	
	{{#if changePassword}}
		<form class="form profile__change-password">
			{{{fieldFormPasswordOld}}} 
			{{{fieldFormPasswordNew}}}
			{{{fieldFormPasswordRepeat}}}
		
			{{#unless  isShow}}
			{{> button type='submit' classNames='profile__button-save-password' label='Сохранить' }}
			
			<span  class="form__error form__error_form hidden" name="form__error_form"">Вообще не попал...</span>
			{{/unless }}
		</form>
	
	{{else}}
	
		<form class="form profile__data">
		
			{{{fieldFormEmail}}}
			{{{fieldFormLogin}}}
			{{{fieldFormFirstName}}}
			{{{fieldFormSecondName}}}
			{{{fieldFormPhone}}}
			{{{fieldFormNameInChat}}}
	
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
