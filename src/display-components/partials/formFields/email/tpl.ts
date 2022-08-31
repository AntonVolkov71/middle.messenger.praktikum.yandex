const tpl: string = `
	{{> fieldForm value=email name='email' label='Почта' disabled=disabled
	inputId=inputId type='email' textError='Email не настоящий'}}
`;

export default tpl;
