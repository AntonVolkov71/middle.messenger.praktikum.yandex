import { ValidationTypes } from '../../types/utils';
import parseValidationTypes from './parseValidationTypes';
import isValidFocusBlur from './isValidFocusBlur';
import toggleHideElement from '../toggleHideElement';

const parseFocusBlur = (e: FocusEvent): void => {
	const { value, name } = e.target as HTMLTextAreaElement;
	const typeValidate: ValidationTypes | null = parseValidationTypes(name);

	if (typeValidate) {
		const isValid: boolean = isValidFocusBlur(typeValidate, value);
		const $form: HTMLFormElement = (<HTMLFormElement>(<HTMLFormElement>e.target)
			.parentNode);

		if ($form) {
			const $errorText: HTMLElement | null = $form.querySelector(`.form__error_${name}`);
			if ($errorText) {
				if (name === 'password_repeat') {
					const password: string = $form.password?.value;

					toggleHideElement($errorText, password === value);
				} else {
					toggleHideElement($errorText, isValid);
				}
			}
		}
	}
};

export default parseFocusBlur;
