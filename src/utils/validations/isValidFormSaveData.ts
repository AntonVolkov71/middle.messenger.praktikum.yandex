import { ValidationTypes } from '@myTypes/utils';
import { User } from '@myTypes/api';
import isValidation from './isValidation';

const isValidFormSaveData = (userDto: User): boolean => {
	const {
		email,
		login,
		first_name,
		second_name,
		display_name,
		phone,
	} = userDto;

	return isValidation(ValidationTypes.EMAIL, email)
		&& isValidation(ValidationTypes.FIRST_NAME, first_name)
		&& isValidation(ValidationTypes.LOGIN, login)
		&& isValidation(ValidationTypes.SECOND_NAME, second_name)
		&& isValidation(ValidationTypes.LOGIN, display_name)
		&& isValidation(ValidationTypes.PHONE, phone);
};

export default isValidFormSaveData;
