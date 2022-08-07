const tpl = `
<div class="input-file">
    <div class="input-file__card">
        <p class="input-file__title {{#if titleError}}input-file__title_error{{/if}}">
            {{#if titleSuccess}}{{titleSuccess}}{{/if}}
            {{#if titlePutFile}}{{titlePutFile}}{{/if}}
            {{#if titleError}}{{titleError}}{{/if}}
        </p>

        {{#if titleSuccess}}
        <p class="input-file__name-file>
            {{nameFile}}
            </p>
            {{else}}
            <div class=" input-file__input-wrapper">
            <label for="input-file" class="input-file__label">
                <span class="input-file__button-text ">Выбрать файл на компьютере</span></label>
            <input type="file" id="input-file" name="input-file" class="input-file__input-file">
        {{/if}}
    </div>

    {{> button classNames="input-file__button-change" type="button" label="Поменять"}}
    {{#if errorNotSelect}}{{/if}}
</div>
</div>
`

export default tpl
