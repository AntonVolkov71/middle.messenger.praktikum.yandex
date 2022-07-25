import {existUsers} from "../../mock-data";
import toggleClassList from "../../utils/toggleClassList";
import {localePaths} from "../../assets/constants";

function isAuth(login, password) {
    return existUsers.find(user =>
        user.login.toLocaleLowerCase() === login.toLocaleLowerCase()
        && user.password.toLocaleLowerCase() === password.toLocaleLowerCase())
}

function toggleErrorAuth(form, addOrRemove, className) {
    const $errors = form.querySelectorAll('.form__error');

    $errors.forEach(error => toggleClassList(error, addOrRemove, className))
}

function handlerLogin() {
    const $form = document.querySelector('.login__form');

    if ($form) {
        $form.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target;
            const login = form['login-input'].value;
            const password = form['password-input'].value;

            toggleErrorAuth(form, 'add', 'hidden')

            isAuth(login, password)
                ? location.assign(localePaths.main)
                : toggleErrorAuth(form, 'remove', 'hidden')
        })
    }
}

export default handlerLogin