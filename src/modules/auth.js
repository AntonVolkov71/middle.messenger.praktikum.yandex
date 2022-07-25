import toggleClassList from "../utils/toggleClassList";
import {localePaths} from "../assets/constants";

function toggleErrorAuth(form, addOrRemove, className) {
    const $errors = form.querySelectorAll('.form__error');

    $errors.forEach(error => toggleClassList(error, addOrRemove, className))
}

function checkedAuth(data) {
    return data;
}

function compareString(left, right) {
    return left === right;
}

function handlerAuth() {
    const $form = document.querySelector('.auth__form');

    if ($form) {
        $form.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target;
            toggleErrorAuth(form, 'add', 'hidden')

            const password = form['auth-password'].value
            const morePassword = form['auth-password-more'].value
            const isComparePassword = compareString(password, morePassword)

            if (!isComparePassword) {
                return toggleErrorAuth(form, 'remove', 'hidden')
            }
            const dataUser = {
                email: form['auth-email'].value,
                login: form['auth-login'].value,
                name: form['auth-name'].value,
                surname: form['auth-surname'].value,
                phone: form['auth-phone'].value,
            }

            checkedAuth(dataUser);
            location.assign(localePaths.login)
        })
    }
}

export default handlerAuth