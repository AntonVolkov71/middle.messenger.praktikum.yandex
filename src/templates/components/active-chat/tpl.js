const tpl = `
    <div class=" activeChat__header ">
        <div class="activeChat__profile-wrapper">
            {{#if linkUser.avatar}}
                <img class="activeChat__avatar_image" src="{{linkUser.avatar}}"/>
            {{else}}
                <div class="activeChat__avatar_image"></div>
            {{/if}}
            <p class="activeChat__name-profile">{{linkUser.name}}</p>
        </div>
        <div class="activeChat__profile-menu">
            <span class="material-icons">more_vert</span>
        </div>
    </div>

    <div class="activeChat__messages scroll">
        {{{messages}}}
    </div>

    <div class="active__send-messages">
        {{{inputMessage}}}
    </div>
`

export default tpl
