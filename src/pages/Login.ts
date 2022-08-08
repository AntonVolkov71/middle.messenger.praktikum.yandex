import Login from '../templates/pages/login';
import localePaths from '../assets/constants';
import isValidation from '../utils/isValidation';
import ValidationTypes from '../types/validation';
import parseValidationTypes from "../utils/parseValidationTypes";

const isValidFocusBlur = (type: ValidationTypes, value): boolean => isValidation(type, value)
const toggleError = (element: HTMLElement, isHidden: boolean) => {
	if (isHidden) {
		element.classList.add('hidden')
	} else {
		element.classList.remove('hidden');
	}
}

const parseFocusBlur = (e: FocusEvent) => {
	const {value, name} = e.target as HTMLTextAreaElement;

	const typeValidate: ValidationTypes | null = parseValidationTypes(name)

	if (typeValidate) {
		const isValid = isValidFocusBlur(typeValidate, value);
		const $form = (<HTMLElement>(<HTMLElement>e.target).parentNode);

		if ($form) {
			const $errorText: HTMLElement | null = $form.querySelector(`.form__error_${name}`);
			if ($errorText) {
				toggleError($errorText, isValid)
			}
		}
	}
}

const login = (props = {}) => new Login('div', {
	...props,
	events: {
		linkToAuth: (e) => {
			e.preventDefault();
			e.stopPropagation();

			const {href} = e.target;
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
					toggleError($errorText, isValidForm)
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
		class: 'login popup',
	},
});

export default login;
