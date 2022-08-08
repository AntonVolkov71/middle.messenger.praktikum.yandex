import Auth from '../templates/pages/auth';
import isValidation from '../utils/validations/isValidation';
import {ValidationTypes} from '../types/utils';
import parseValidationTypes from "../utils/validations/parseValidationTypes";
import isValidFocusBlur from "../utils/validations/isValidFocusBlur";
import toggleHideElement from "../utils/toggleHideElement";
import {Props} from "../types/component";
import Component from "../services/Component";

const parseFocusBlur = (e: FocusEvent): void => {
	const {value, name} = e.target as HTMLTextAreaElement;
	const typeValidate: ValidationTypes | null = parseValidationTypes(name)

	if (typeValidate) {
		const isValid: boolean = isValidFocusBlur(typeValidate, value);
		const $form: HTMLElement = (<HTMLElement>(<HTMLElement>e.target).parentNode);

		if ($form) {
			const $errorText: HTMLElement | null = $form.querySelector(`.form__error_${name}`);
			if ($errorText) {
				if (name === 'password_repeat') {
					const password: string = $form['password'].value

					toggleHideElement($errorText, password === value)
				} else {
					toggleHideElement($errorText, isValid)
				}
			}
		}
	}
}

const isValidForm = (fields: { [key: string]: string }): boolean => {
	const {
		password,
		passwordRepeat,
		login,
		phone,
		email,
		firstName,
		secondName,
	} = fields;

	return isValidation(ValidationTypes.PASSWORD, password)
		&& isValidation(ValidationTypes.PASSWORD, passwordRepeat)
		&& isValidation(ValidationTypes.LOGIN, login)
		&& isValidation(ValidationTypes.PHONE, phone)
		&& isValidation(ValidationTypes.EMAIL, email)
		&& isValidation(ValidationTypes.FIRST_NAME, firstName)
		&& isValidation(ValidationTypes.SECOND_NAME, secondName)
		&& password === passwordRepeat;
};

const auth = (props: Props = {}): Component => new Auth('div', {
	...props,
	events: {
		linkToLogin: (e) => {
			e.preventDefault();
			e.stopPropagation();

			const {href} = e.target as HTMLLinkElement;
			window.location.href = href;
		},
		submit: (e: SubmitEvent) => {
			e.preventDefault();
			const form: EventTarget | null = e.target;

			if (form && form instanceof HTMLElement) {
				
				const fields: {[key: string]: string } = {
					password: form['password'].value,
					passwordRepeat: form['password_repeat'].value,
					login: form['login'].value,
					phone: form['phone'].value,
					email: form['email'].value,
					firstName: form['first_name'].value,
					secondName: form['second_name'].value,
				};

				const isValidAllFields: boolean = isValidForm(fields);
				const $errorText: HTMLElement | null = form.querySelector('.form__error_form');

				if ($errorText) {
					toggleHideElement($errorText, isValidAllFields)
				}
			}

		},
		focus: (e: FocusEvent): void => {
			parseFocusBlur(e);
		},
		blur: (e: FocusEvent): void => {
			parseFocusBlur(e);
		},
	},
	attr: {
		'class': 'auth popup',
	},
});

export default auth;
