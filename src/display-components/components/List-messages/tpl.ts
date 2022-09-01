const tpl: string = `

	{{#each messages}}
   <div
      {{#ifEqualsId ../myId  user_id}}
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
