const tpl: string = `
		{{#if isOpenMenuChat}}
			{{> modal content=chatMenu }}
		{{/if}}
    <div class=" activeChat__header ">
        <div class="activeChat__profile-wrapper">
            {{#if avatar}}
                <img class="activeChat__avatar_image" src="{{avatar}} alt="avatar chat"/>
            {{else}}
                <div class="activeChat__avatar_image"></div>
            {{/if}}
            <p class="activeChat__name-profile">{{linkUser.name}}</p>
           {{connectionOpen}}
        </div>
        
        <div class="activeChat__open-menu">
            <span class="material-icons">more_vert</span>
        </div>
    </div>

    <div class="activeChat__messages scroll">
        {{{messages}}}
    </div>

    <div class="active__send-messages">
        {{{sendMessage}}}
    </div>
`;

export default tpl;
