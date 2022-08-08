const tpl: string = `<div
    {{#ifEqualsId myId  content.author.id}}
    class="message message_my"
    {{else}}
    class="message message_opponent"
    {{/ifEqualsId}}
>
    {{#if content.content.text}}
        <p class="message__text">{{content.content.text}}</p>

    {{else if content.content.image}}
        <img src="{{content.content.image}}" alt="" class="message__image">
    {{/if}}
    <div class="message__description">
        {{#if content.unread}}
            <span class="message__proof material-icons">keyboard_double_arrow_down</span>
        {{/if}}
        <p class="message__time">{{content.time}}</p>
    </div>
</div>
`;
export default tpl;
