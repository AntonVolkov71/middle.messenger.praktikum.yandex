const tpl: string = `
	{{> fieldForm value=phone name='phone' label='Телефон' disabled=disabled
	inputId=inputId type='tel' minlength=8 maxlength=15
	textError='Начинаться должен с + либо 8, от 10 до 15 цифр, без скобок'}}
`;

export default tpl;
