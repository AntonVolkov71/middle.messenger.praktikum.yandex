const tpl: string = `
	{{> fieldForm value=display_name name='display_name' label='Имя в чате' disabled=disabled
	inputId=inputId type='text' minlength=3 maxlength=20
	textError='Имя в чате должно содержать цифры (но полностью не состоять из них), буквы, длина от 3 до 20 символов'}}
`;

export default tpl;
