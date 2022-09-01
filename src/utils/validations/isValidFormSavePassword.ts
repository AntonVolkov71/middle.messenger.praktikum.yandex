import isValidation from './isValidation';
import { ValidationTypes } from '../../types/utils';
import { ChangePasswords } from '../../types/api';

interface PasswordAll extends ChangePasswords {
	repeatPassword: string;
}

const isValidFormSavePassword = (passwords: PasswordAll): boolean => {
	const {
		oldPassword,
		newPassword,
		repeatPassword,
	} = passwords;

	return isValidation(ValidationTypes.PASSWORD, oldPassword)
		&& isValidation(ValidationTypes.PASSWORD, repeatPassword)
		&& isValidation(ValidationTypes.PASSWORD, newPassword)
		&& newPassword === repeatPassword;
};

export default isValidFormSavePassword;
