const tpl: string = ` 
{{#each chats}}
  {{> chat name=this.name message=this.dataLastMessage avatar=avatar }}
{{/each}}   
`;

export default tpl;
