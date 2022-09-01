const tpl: string = `
   	{{#if isCreate}}
			<form class="createChat__form">
				{{> input classNames="createChat__input" type="text" name="create_chat"
				placeholder="value" minlength="1" }}
				
				{{> button  classNames="createChat__button" type="submit" label="Создать" }}
			</form>
		{{else}}
	
			<div class="createChat__open">
				<p class="createChat__error">{{error}}</p>
				<span class="material-icons ">add</span>
				<p >Создать чат</p>
			</div>
		
		{{/if}}
`;
export default tpl;
