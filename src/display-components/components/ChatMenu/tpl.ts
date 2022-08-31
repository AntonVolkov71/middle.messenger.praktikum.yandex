const tpl: string = `
		
		
		<h3 class="chat-menu__title">Список собравшихся здесь</h3>
		
		<form  class="chat-menu__add-user">
		{{#if error}}
			<div class="chat-menu__wrapper-error">
				<p class="chat-menu__error">У нас проблемы Хьюстон - {{error}}</p>
				<p class="chat-menu__error_close">Кликни да закрой их</p>
			</div>
			
		{{else}}
			{{> input classNames="chat-menu__add-user_input" name="chat-menu-add" type="text"  required="required" }}
			{{> button classNames="chat-menu__add-user_button" type="submit"  label="Добавить дружка в чат"}}
		{{/if}}
		
		</form>
		
		<div class="chat-menu__wrapper-users">
			{{#each users}}
				<div class="chat-menu__users">
					{{#if avatar}}
						<img class="chat-menu__avatar" src="{{../apiResource}}{{avatar}}" alt="avatar-user"/>
					{{else}}
						<div class="chat-menu__image"></div>
					{{/if}}
						<p class="chat-menu__login">{{login}}</p>
						
					{{> button classNames="chat-menu__button_delete" id=id label="Выгнать из чата" }}
				</div>
				
			{{/each}}
		</div>

`;
export default tpl;
