import { FieldsAllData } from '../../types/form';
import isValidation from './isValidation';
import { ValidationTypes } from '../../types/utils';

const isValidFormSaveData = (fields: FieldsAllData): boolean => {
	const {
		email,
		login,
		firstName,
		secondName,
		nameInChat,
		phone,
	} = fields;

	return isValidation(ValidationTypes.EMAIL, email)
		&& isValidation(ValidationTypes.FIRST_NAME, firstName)
		&& isValidation(ValidationTypes.LOGIN, login)
		&& isValidation(ValidationTypes.SECOND_NAME, secondName)
		&& isValidation(ValidationTypes.LOGIN, nameInChat)
		&& isValidation(ValidationTypes.PHONE, phone);
};

export default isValidFormSaveData;
