const tpl: string = `
	{{> fieldForm value=password_old name='password_old' label='Старый пароль' disabled=disabled
	inputId=inputId type='password' minlength=8 maxlength=40
	textError='Пароль должен состоять из одной заглавной буквы и цифры, длина от 8 до 40 символов'}}
`;

export default tpl;
