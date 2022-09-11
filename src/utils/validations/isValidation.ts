import { MAX_LENGTH_PASSWORD, MIN_LENGTH_PASSWORD } from '@assets/constants';
import { ValidationTypes } from '@myTypes/utils';

function isValidName(value: string): boolean {
	const regex = /^[А-ЯЁA-Z]([а-яёa-z-])+$/;
	return regex.test(value);
}

function isValidLogin(value: string): boolean {
	const regex = /([а-яёa-z\-_0-9]){4,21}$/;
	return regex.test(value);
}

function isValidPassword(value: string): boolean {
	const regex = /(?=.*[А-ЯЁA-Z])(?=.*[0-9])/;
	return regex.test(value);
}

function isValidEmail(value: string): boolean {
	const regex = /^[\w.-]{2,}@[\w-]+\.[a-zA-Z.]{2,}$/;
	return regex.test(value);
}

function isValidPhone(value: string): boolean {
	const regex = /^(\+7|8)(9\d{9})|(\+7)((\(9\d{2}\)\s?)|(\s9\d{2}-))(\d{3}(-\d{2}){2})$/;
	return regex.test(value);
}

function isOnlyDigit(value: string): boolean {
	const regex = /^\d+$/;
	return regex.test(value);
}

const isValidation = (type: ValidationTypes, value: string = ''): boolean => {
	switch (type) {
	case ValidationTypes.FIRST_NAME:
		return isValidName(value);

	case ValidationTypes.SECOND_NAME:
		return isValidName(value);

	case ValidationTypes.LOGIN:
		if (isOnlyDigit(value)) {
			return false;
		}

		return isValidLogin(value);

	case ValidationTypes.EMAIL:
		return isValidEmail(value);

	case ValidationTypes.PASSWORD:
		if (value.length < MIN_LENGTH_PASSWORD || value.length > MAX_LENGTH_PASSWORD) {
			return false;
		}

		return isValidPassword(value);

	case ValidationTypes.PHONE:
		return isValidPhone(value);

	default:
		return false;
	}
};

export default isValidation;
