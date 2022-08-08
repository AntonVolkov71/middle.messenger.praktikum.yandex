import {ValidationTypes} from '../../types/utils';
import {maxLengthPassword, minLengthPassword} from '../../assets/config';

function isValidName(value): boolean {
	const regex = /^[А-ЯЁA-Z]([а-яёa-z\-])+$/;
	return regex.test(value);
}

function isValidLogin(value): boolean {
	const regex = /([а-яёa-z\-_0-9]){4,21}$/;
	return regex.test(value);
}

function isValidPassword(value): boolean {
	const regex = /(?=.*[А-ЯЁA-Z])(?=.*[0-9])/;
	return regex.test(value);
}

function isValidEmail(value): boolean {
	const regex = /^[\w.-]{2,}@[\w-]+\.[a-zA-Z.]{2,}$/;
	return regex.test(value);
}

function isValidPhone(value): boolean {
	const regex = /^(\+7|8)(9\d{9})|(\+7)((\(9\d{2}\)\s?)|(\s9\d{2}-))(\d{3}(-\d{2}){2})$/;
	return regex.test(value);
}

function isOnlyDigit(value): boolean {
	const regex = /^\d+$/;
	return regex.test(value);
}

const isValidation = (type: ValidationTypes, value: string): boolean => {
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
			if (value.length < minLengthPassword || value.length > maxLengthPassword) {
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