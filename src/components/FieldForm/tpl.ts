const tpl: string = `
	<label class="form__label" for=name>{{label}}</label>
	{{> input id=inputId name=name classNames="form__input" type=type
	value=value minlength=minlength maxlength=maxlength disabled=disabled }}
	<span class="form__error form__error_{{name}} hidden">
	{{textError}}
	</span>
`;

export default tpl;
