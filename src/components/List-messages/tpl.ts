const tpl: string = `
	<p class="listMessages__date-title">
			{{dateMessage}}
	</p>
	
	{{#each messages}}
			<div
					{{#ifEqualsId ../myId  this.author.id}}
					class=" listMessages__message listMessages__message_my "
					{{else}}
					class="listMessages__message"
					{{/ifEqualsId}}
			>
					{{> message content=this myId=../myId}}
			</div>
	{{/each}}
`;

export default tpl;
