import { FieldsPasswords } from '../../types/form';
import isValidation from './isValidation';
import { ValidationTypes } from '../../types/utils';
import { existUsers } from '../../assets/mock-data';

const isValidFormSavePassword = (fields: FieldsPasswords): boolean => {
	const {
		passwordOld,
		passwordNew,
		passwordRepeat,
	} = fields;

	return isValidation(ValidationTypes.PASSWORD, passwordNew)
		&& isValidation(ValidationTypes.PASSWORD, passwordRepeat)
		&& passwordNew === passwordRepeat
		&& passwordNew !== existUsers[0]?.password
		&& passwordOld === existUsers[0]?.password;
};

export default isValidFormSavePassword;
