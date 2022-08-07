import ValidationTypes from "../types/validation";
import {maxLengthPassword, minLengthPassword} from "../assets/config";

function isValidName(value) {
	const regex = /^[А-ЯЁA-Z]([а-яёa-z\-])+$/
	return regex.test(value)
}

function isValidLogin(value) {
	const regex = /([а-яёa-z\-_0-9]){4,21}$/
	return regex.test(value)
}

function isValidPassword(value) {
	const regex = /(?=.*[А-ЯЁA-Z])(?=.*[0-9])/
	return regex.test(value)
}

function isValidEmail(value) {
	const regex = /^[\w.-]{2,}@[\w-]+\.[a-zA-Z.]{2,}$/
	return regex.test(value)
}

function isValidPhone(value) {
	const regex = /^(\+7|8)(9\d{9})|(\+7)((\(9\d{2}\)\s?)|(\s9\d{2}-))(\d{3}(-\d{2}){2})$/
	return regex.test(value)
}

function isOnlyDigit(value) {
	const regex = /^\d+$/
	return regex.test(value)
}

const isValidation = (type, value) => {
	switch (type) {
		case ValidationTypes.first_name:
			return isValidName(value)
		case ValidationTypes.second_name:
			return isValidName(value)
		case ValidationTypes.login:
			if (isOnlyDigit(value)) {
				return false
			}

			return isValidLogin(value)
		case ValidationTypes.email:
			return isValidEmail(value)
		case ValidationTypes.password:
			if (value.length < minLengthPassword || value.length > maxLengthPassword) {
				return false;
			}

			return isValidPassword(value)
		case ValidationTypes.phone:
			return isValidPhone(value)
		default:
			return false
	}
}

export default isValidation
