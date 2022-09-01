const tpl: string = `
	<input
		id="{{id}}"
		class="input {{classNames}}"
		type="{{type}}"
		placeholder="{{placeHolder}}"
		value="{{value}}"
		minlength="{{minlength}}"
		maxlength="{{maxlength}}"
		{{#if required }} required {{/if}}
		{{#if disabled}} disabled{{/if}}
		name="{{name}}"
	>
`;

export default tpl;
