const tpl = `
	{{#if isOpenGetFile}}
		{{{inputFile}}}
	{{/if}}
	
	<form class="inputMessage__form">
		{{#if idSendFile}}
			<p>Файл прикреплен</p>
		{{else}}
			<div class="inputMessage__get-file">
				<span class="inputMessage__input-file-icon material-icons ">attach_file</span>
			</div>
		{{/if}}
		{{> input type='text' name='message' classNames='inputMessage__input-message' minlength=0 }}
	
		<button type="submit" class="inputMessage__button-submit">
			<span class="inputMessage__button-submit-icon material-icons">send</span>
		</button>
	</form>
	`;
export default tpl;
