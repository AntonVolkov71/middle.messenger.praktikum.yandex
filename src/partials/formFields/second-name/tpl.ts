const tpl: string = `
	{{> fieldForm value=second_name name='second_name' label='Фамилия' disabled=disabled
	inputId=inputId type='text' minlength=1 
	textError='Первая заглавная, без пробелов и без цифр, можно добавить дефис'}}
`;

export default tpl;
