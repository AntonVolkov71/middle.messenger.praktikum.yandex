import { ValidationTypes } from '@myTypes/utils';
import { PasswordRepeat, SignupDto } from '@myTypes/api';
import isValidation from './isValidation';

type Fields = SignupDto & PasswordRepeat

const isValidFormAuth = (fields: Fields): boolean => {
	const {
		password,
		password_repeat: passwordRepeat,
		login,
		phone,
		email,
		first_name: firstName,
		second_name: secondName,
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

export default isValidFormAuth;
