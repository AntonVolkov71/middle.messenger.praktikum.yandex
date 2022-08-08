import Login from '../templates/pages/login';
import localePaths from '../assets/constants';
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
				toggleHideElement($errorText, isValid)
			}
		}
	}
}

const login = (props: Props = {}): Component => new Login('div', {
	...props,
	events: {
		linkToAuth: (e: PointerEvent) => {
			e.preventDefault();
			e.stopPropagation();

			const {href} = e.target as HTMLLinkElement;
			window.location.href = href;
		},
		submit: (e: SubmitEvent) => {
			e.preventDefault();

			const form: EventTarget | null = e.target;

			if (form && form instanceof HTMLElement) {
				const password: string = form['password'].value;
				const loginValue: string = form['login'].value;

				const isValidForm: boolean = isValidation(ValidationTypes.PASSWORD, password)
					&& isValidation(ValidationTypes.LOGIN, loginValue);

				const $errorText: HTMLElement | null = form.querySelector('.form__error_form');

				if ($errorText) {
					toggleHideElement($errorText, isValidForm)
				}
				if (isValidForm) {
					window.location.href = localePaths.main
				}
			}
		},
		focus: (e: FocusEvent) => {
			parseFocusBlur(e)
		},
		blur: (e: FocusEvent) => {
			parseFocusBlur(e);
		},
	},
	attr: {
		'class': 'login popup',
	},
});

export default login;
