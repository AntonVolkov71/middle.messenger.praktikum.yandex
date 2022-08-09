import Auth from '../templates/pages/auth';
import isValidation from '../utils/validations/isValidation';
import { ValidationTypes } from '../types/utils';
import toggleHideElement from '../utils/toggleHideElement';
import { Props } from '../types/component';
import Component from '../services/Component';
import parseFocusBlur from '../utils/validations/parseFocusBlur';

const isValidForm = (fields: { [key: string]: string | undefined }): boolean => {
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
		linkToLogin: (e: PointerEvent) => {
			e.preventDefault();
			e.stopPropagation();

			const { href } = e.target as HTMLLinkElement;
			window.location.href = href;
		},
		submit: (e: SubmitEvent) => {
			e.preventDefault();
			const $form: HTMLFormElement | null = <HTMLFormElement>e.target;

			if ($form && $form instanceof HTMLElement) {
				const fields: {[key: string]: string | undefined} = {
					password: $form.password?.value,
					passwordRepeat: $form.password_repeat?.value,
					login: $form.login?.value,
					phone: $form.phone?.value,
					email: $form.email?.value,
					firstName: $form.first_name?.value,
					secondName: $form.second_name?.value,
				};

				const isValidAllFields: boolean = isValidForm(fields);
				const $errorText: HTMLElement | null = $form.querySelector('.form__error_form');

				if ($errorText) {
					toggleHideElement($errorText, isValidAllFields);
				}

				if (isValidAllFields) {
					console.info('auth', fields);
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
		class: 'auth popup',
	},
});

export default auth;
