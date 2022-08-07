const tpl = `
    <div class="profile__wrapper-avatar">
        <img src="{{avatar}}" alt="my photo" class="profile__image">
        <div class="profile__change-avatar"> Поменять аватар</div>
    </div>

    {{#if inputFile}}
        {{{inputFile}}}
    {{/if}}
    <h2 class="profile__name">{{name}}</h2>

    {{#if changePassword}}
        <form class="profile__change-password">
            <div class="profile__field">
                <label for="password_old">
                    Старый пароль
                </label>
                {{> input id='profile-password_old' classNames="form__input" value=oldPassword name='password_old' type='password'  minlength="8" maxlength="40" required=true }}
            </div>

            <div class="profile__field">
                <label for="password_new">
                    Новый пароль
                </label>
                {{> input id='profile-password_new' classNames="form__input" name='password_new' type='password'  minlength="8" maxlength="40" required=true value=''}}
            </div>

            <div class="profile__field">
                <label for="password_repeat">
                    Повторите новый пароль
                </label>
                {{> input id='profile-repeat-new-password' classNames="form__input" name='password_repeat' type='password'  minlength="8" maxlength="40" required=true value=''}}
            </div>

								<p class="form__error form__error_change-password "></p>

            {{#unless  isShow}}
                {{> button type='submit' classNames='profile__button-save-password' label='Сохранить' }}
            {{/unless }}
        </form>
    {{else}}
        <form class="profile__data">
            <div class="profile__field">
                <label class="profile__label" for="email">Почта</label>
							{{> input id="profile-email" name="email" classNames="form__input" disabled=isShow type="email" value=email}}
            </div>

            <div class="profile__field">
                	<label class="profile__label" for="login">Логин</label>
									{{> input id="profile-login" name="login" classNames="form__input" disabled=isShow type="text" value=login minlength="3" maxlength="20"}}
            </div>

            <div class="profile__field">
            	<label class="profile__label" for="first_name">Имя</label>
							{{> input id="auth-first_name"  name="first_name" classNames="form__input" value=name type="text" disabled=isShow minlength="1" required=true}}
            </div>

            <div class="profile__field">
             <label class="profile__label for="second_name">Фамилия</label>
								{{> input id="profile-second_name" value=secondName name="second_name" classNames="form__input" type="text" disabled=isShow minlength="1"  required=true}}
            </div>

            <div class="profile__field">
            	<label class="profile__label" for="name_in_chat">Имя в чате</label>
									{{> input id="profile-login" value=nameInChat name="name_in_chat" classNames="form__input" disabled=isShow type="text" minlength="3" maxlength="20"}}
            </div>

            <div class="profile__field">
            <label class="profile__label" for="phone">Телефон</label>
							{{> input id="auth-phone" value=phone name="phone" classNames="form__input" type="tel" required="required" disabled=isShow minlength="8" maxlength="15"}}
             </div>

            {{#unless  isShow}}
                {{> button type='submit' classNames='profile__button-save' label='Сохранить' }}
            {{/unless }}
            <p class="form__error form__error_change-password "></p>

        </form>
        {{#if isShow}}
            <p data-profile="change-profile" class="profile__change-data">Изменить данные</p>
            <p data-profile="change-password" class="profile__button-change-password">Изменить пароль</p>

            <p data-profile="exit-profile" class="profile__signout">Выйти</p>
        {{/if}}
    {{/if}}
`;

export default tpl;
