const tpl: string = `
    <section
            class="main__list-chats {{#if close}}main__list-chats_close {{/if}}">
        <div class="main__wrapper-profile">
            {{{openProfile}}}
        </div>
        <div class="main__wrapper-search">
            {{{searchChat}}}
        </div>
        <div class="main__wrapper-listChats scroll">
            {{{listChats}}}
        </div>
    </section>
    <section class="main__content">
        {{{content}}}
    </section>
`;

export default tpl;
