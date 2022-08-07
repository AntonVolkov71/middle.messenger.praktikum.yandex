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
                <label for="profile-email">
                    Почта
                </label>
                {{> input value=email name='profile-email' type='email'  disabled=isShow minlength=2 required=true }}
            </div>

            <div class="profile__field">
                <label for="profile-login">
                    Логин
                </label>
                {{> input value=login name='profile-login' type='text'  disabled=isShow minlength=2 required=true }}
            </div>

            <div class="profile__field">
                <label for="profile-name">
                    Имя
                </label>
                {{> input value=name name='profile-name' type='text'  disabled=isShow minlength=2 required=true }}
            </div>

            <div class="profile__field">
                <label for="profile-second-name">
                    Фамилия
                </label>
                {{> input value=secondName name='profile-second-name' type='text'  disabled=isShow minlength=2 required=true }}
            </div>

            <div class="profile__field">
                <label for="profile-name-in-chat">
                    Имя в чате
                </label>
                {{> input value=nameInChat name='profile-name-in-chat' type='text'  disabled=isShow minlength=2 required=true }}
            </div>

            <div class="profile__field">
                <label for="profile-phone">
                    Телефон
                </label>
                {{> input value=phone name='profile-phone' type='tel'  disabled=isShow minlength=2 required=true }}
            </div>

            {{#unless  isShow}}
                {{> button type='submit' classNames='profile__button-save' label='Сохранить' }}
            {{/unless }}
        </form>
        {{#if isShow}}
            <p data-profile="change-profile" class="profile__change-data">Изменить данные</p>
            <p data-profile="change-password" class="profile__button-change-password">Изменить пароль</p>

            <p data-profile="exit-profile" class="profile__signout">Выйти</p>
        {{/if}}
    {{/if}}
`

export default tpl
