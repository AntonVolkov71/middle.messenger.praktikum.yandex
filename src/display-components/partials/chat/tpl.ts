const tpl: string = `
	<div {{#if active}}class="chat chat_active" {{else}}class="chat"{{/if}}>
		<div id="chat-{{id}}" class="chat__over-click"></div>
		
		<div class="chat__avatar ">
			{{#if avatar}}
				<img class="chat__avatar_image" src="{{avatar}}" alt="avatar user"/>
				{{else}}
				<div class="chat__avatar_image"></div>
			{{/if}}
		</div>
		
		<div class="chat__user">
			<p class="chat__user_name">{{title}}</p>
			
			<p class="chat__user_last-message">
			{{last_message.content}}
			</p>
		</div>
		
		<div class="chat__info-message">
				<p class="chat__info-message_time">{{#dateFilter}}{{message.time}}{{/dateFilter}}</p>
			
			<p class="chat__info-message_ofUnread">{{unreadCount}}</p>
		</div>
		
	</div>
`;

export default tpl;
