import Login from '../templates/pages/login';
import localePaths from "../assets/constants";
import isValidation from "../utils/isValidation";
import ValidationTypes from "../types/validation";

const parseValidFocusBlur = (e) => {
	const {value, name} = e.target;
	const isValid = isValidation(name, value);

	const $errorText =  e.target.parentNode.querySelector(`.form__error_${name}`)
	isValid
		? $errorText.classList.add('hidden')
		: $errorText.classList.remove('hidden')
}

const login = (props) => {
	return new Login('div', {
		...props,
		events: {
			linkToAuth: (e) => {
				e.preventDefault();
				e.stopPropagation();

				const {href} = e.target;
				window.location.href = href;
			},
			submit: (e) => {
				e.preventDefault();
				const form = e.target;
				const password = form[ValidationTypes.password].value
				const login = form[ValidationTypes.login].value;
				const isValidForm = isValidation(ValidationTypes.password, password)
					&& isValidation(ValidationTypes.login, login)
				
				const $errorText = e.target.querySelector('.form__error_form')

				if (isValidForm) {
					$errorText.classList.add('hidden')
					console.log('login', {login, password});
					window.location.href = localePaths.main
				} else {
					$errorText.classList.remove('hidden')
				}
			},
			focus: (e) => {
				parseValidFocusBlur(e)
			},
			blur: (e) => {
				parseValidFocusBlur(e)
			},
		},
		attr: {
			class: 'login popup',
		},
	});

}

export default login;
