const tpl: string = `
		<div class="input-file__card">
			<span class="input-file__close  material-icons ">close</span>
		
			{{#if errorTitle}}
				<h4>{{errorTitle}}</h4>
			{{else}}
				{{#if successTitle}}
					<p>{{nameFile}}</p>
					<h5>{{successTitle}}</h5>
					
				{{else}}
					<h4>{{title}}</h4>
			
					<div class=" input-file__input-wrapper">
							<label for="input-file" class="input-file__label">
								<span class="input-file__button-text ">Выбрать файл на компьютере</span>
							</label>
							<input type="file" id="input-file" name="input-file" class="input-file__input-file">
					</div>
				{{/if}}
			
			{{/if}}
		</div>
`;

export default tpl;
