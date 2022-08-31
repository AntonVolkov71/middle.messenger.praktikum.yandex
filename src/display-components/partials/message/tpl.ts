const tpl: string = `
	{{#if content.content}}
	<div
			{{#ifEqualsId myId  content.user_id}}
				class="message message_opponent"		
			{{else}}
				class="message message_my"
			{{/ifEqualsId}}
		>
			{{#renderMessage content}}{{/renderMessage}}
		</div>
	{{/if}}
`;
export default tpl;
