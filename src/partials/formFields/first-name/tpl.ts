const tpl: string = `
	{{> fieldForm value=first_name name='first_name' label='Имя' disabled=disabled
	inputId=inputId type='text' minlength=1 
	textError='Первая заглавная, без пробелов и без цифр, можно добавить дефис'}}
`;

export default tpl;
