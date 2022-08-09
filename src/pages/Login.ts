import Login from '../templates/pages/login';
import isValidation from '../utils/validations/isValidation';
import { ValidationTypes } from '../types/utils';
import toggleHideElement from '../utils/toggleHideElement';
import { Props } from '../types/component';
import Component from '../services/Component';
import parseFocusBlur from '../utils/validations/parseFocusBlur';

const login = (props: Props = {}): Component => new Login('div', {
	...props,
	events: {
		linkToAuth: (e: PointerEvent) => {
			e.preventDefault();
			e.stopPropagation();

			const { href } = e.target as HTMLLinkElement;
			window.location.href = href;
		},
		submit: (e: SubmitEvent) => {
			e.preventDefault();

			const $form: HTMLFormElement | null = <HTMLFormElement>e.target;

			if ($form && $form instanceof HTMLElement) {
				const password: string = $form.password?.value;
				const loginValue: string = $form.login?.value;

				const isValidForm: boolean = isValidation(ValidationTypes.PASSWORD, password)
					&& isValidation(ValidationTypes.LOGIN, loginValue);

				const $errorText: HTMLElement | null = $form.querySelector('.form__error_form');

				if ($errorText) {
					toggleHideElement($errorText, isValidForm);
				}
				if (isValidForm) {
					console.info('login data', { password, login: loginValue });
				}
			}
		},
		focus: (e: FocusEvent) => {
			parseFocusBlur(e);
		},
		blur: (e: FocusEvent) => {
			parseFocusBlur(e);
		},
	},
	attr: {
		class: 'login popup',
	},
});

export default login;
