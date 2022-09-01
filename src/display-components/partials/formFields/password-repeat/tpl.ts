const tpl: string = `
	{{> fieldForm value=password_repeat name='password_repeat' label='Пароль (еще раз)' disabled=disabled
	inputId=inputId type='password' minlength=8 maxlength=40
	textError='Воу воу, пароли не совпадают'}}
`;

export default tpl;
