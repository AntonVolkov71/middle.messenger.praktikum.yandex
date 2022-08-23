import isValidation from './isValidation';
import { ValidationTypes } from '../../types/utils';

const isValidFormAuth = (fields: { [key: string]: string | undefined }): boolean => {
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

export default isValidFormAuth;
