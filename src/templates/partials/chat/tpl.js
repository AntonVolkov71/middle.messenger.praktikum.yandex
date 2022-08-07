const tpl = `
   <div {{#if active}}class="chat chat_active" {{else}}class="chat"{{/if}}>
 <div id="chat-{{id}}" class="chat__over-click"></div>
 <div class="chat__avatar ">
  {{#if avatar}}
   <img class="chat__avatar_image" src="{{avatar}}"/>
  {{else}}
   <div class="chat__avatar_image"></div>
  {{/if}}

 </div>
 <div class="chat__user">
  <p class="chat__user_name">{{name}}</p>

  <p class="chat__user_last-message">
   {{message.content}}
  </p>
 </div>

 <div class="chat__info-message">
  {{#if message.time}}
   <p class="chat__info-message_time">{{message.time}}</p>
  {{/if}}

  {{#if message.ofUnread}}
   <p class="chat__info-message_ofUnread">{{message.ofUnread}}</p>
  {{/if}}

 </div>
</div>

`

export default tpl
