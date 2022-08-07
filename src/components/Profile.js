import Profile from "../templates/components/profile";
import isValidation from "../utils/isValidation";
import ValidationTypes from "../types/validation";
import {existUsers} from "../assets/mock-data";

const parseValidFocusBlur = (e) => {
	const {name, value} = e.target;
	const $form = e.target.parentNode.parentNode
	const $errorText = $form.querySelector(`.form__error_change-password`)
	let errorText = '';

	if (name === ValidationTypes.password_repeat) {
		const $firstPassword = $form.querySelector('#profile-password_new')
		value === $firstPassword.value
			? errorText = ''
			: errorText = 'Пароли не совпадают'
	}


	if (name === ValidationTypes.password_old) {
		const isValid = isValidation(ValidationTypes.password, value);
		const isEqualPassword = existUsers[0].password === value

		isValid && isEqualPassword
			? errorText = ''
			: errorText = 'Старый пароль не такой как был вчера'
	}

	if (name === ValidationTypes.password_new) {
		const isValid = isValidation(ValidationTypes.password, value);
		isValid
			? errorText = ''
			: errorText = 'Пароль должен состоять из одной заглавной буквы и цифры, длина от 8 до 40 символов'
	}

	$errorText.textContent = errorText
}

const isValidForm = (fields) => {
	const {
		passwordOld,
		passwordNew,
		passwordRepeat,
	} = fields;

	return isValidation(ValidationTypes.password, passwordNew)
		&& isValidation(ValidationTypes.password, passwordRepeat)
		&& passwordNew === passwordRepeat
		&& passwordOld !== passwordNew
}

const profile = (props, elements) => {
	return new Profile(
		'div', {
			...props,
			events: {
				changeProfile: (e) => {
					const profileElement = elements.getProfile()
					profileElement.setProps({isShow: false})
				},
				changePassword: (e) => {
					const profileElement = elements.getProfile()
					profileElement.setProps({
						isShow: false,
						changePassword: true,
						oldPassword: 'A1245678',
					})
				},
				exitProfile: (e) => {
					console.log('exitProfile');
				},
				savePassword: (e) => {
					e.preventDefault();
					const $form = e.target.parentNode.parentNode
					const fields = {
						passwordOld: existUsers[0].password,
						passwordNew: $form.querySelector('#profile-password_new').value,
						passwordRepeat: $form.querySelector('#profile-password_new').value,
					}
					console.log('form', fields.passwordNew);
					const isValidAllFields = isValidForm(fields)
					const $errorText = $form.querySelector(`.form__error_change-password`)
					let errorText = '';


					if (isValidAllFields) {
						errorText = ''
						console.log('savePassword', fields)
					} else {
						errorText = 'Ничего не угадал'
					}

					$errorText.textContent = errorText
				},
				changeAvatar: (e) => {
					const profileElement = elements.getProfile()
					const inputFileElement = elements.getInputFile()
					inputFileElement.setProps({
						titleError: 'Ошибка, попробуйте еще разок',
					})
					profileElement.setProps({
						isShow: true,
						inputFile: inputFileElement
					})
				},
				focus: (e) => {
					parseValidFocusBlur(e)
				},
				blur: (e) => {
					parseValidFocusBlur(e)
				},
			},
			attr: {
				'class': 'profile'
			}
		}
	)
}

export default profile
