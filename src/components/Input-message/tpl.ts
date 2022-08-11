const tpl = `
	<form class="inputMessage__form">
		<label class="inputMessage__attach-file-wrapper ">
			<input type="file" class="inputMessage__input-file">
			<span class="inputMessage__input-file-icon material-icons ">attach_file</span>
		</label>
	
		{{> input type='text' name='message' classNames='inputMessage__input-message'}}
	
		<button type="submit" class="inputMessage__button-submit">
			<span class="inputMessage__button-submit-icon material-icons">send</span>
		</button>
	</form>
	`;
export default tpl;
