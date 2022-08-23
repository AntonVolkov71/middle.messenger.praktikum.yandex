const tpl: string = `
	<div
			{{#ifEqualsId myId  content.author.id}}
				class="message message_my"
			{{else}}
				class="message message_opponent"
			{{/ifEqualsId}}
	>
			{{#if content.content.text}}
				<p class="message__text">{{content.content.text}}</p>
	
			{{else if content.content.image}}
				<img src="{{content.content.image}}" class="message__image" alt="simple image">
			{{/if}}
			
			<div class="message__description">
				{{#if content.unread}}
						<span class="message__proof material-icons">keyboard_double_arrow_down</span>
				{{/if}}
				
				<time class="message__time">{{content.time}}</time>
			</div>
	</div>
`;
export default tpl;
