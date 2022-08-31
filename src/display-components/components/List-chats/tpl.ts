const tpl: string = ` 
	{{#each chats}}
		{{> chat name=this.title message=this.last_message unreadCount=this.unread_count avatar=this.avatar }}
	{{/each}}   
`;

export default tpl;
