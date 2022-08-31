const tpl: string = `
	{{> fieldForm value=login name='login' label='Логин' disabled=disabled
	inputId=inputId type='text' minlength=3 maxlength=20
	textError='Логин должен содержать цифры (но полностью не состоять из них), буквы, длина от 3 до 20 символов'}}
`;

export default tpl;
