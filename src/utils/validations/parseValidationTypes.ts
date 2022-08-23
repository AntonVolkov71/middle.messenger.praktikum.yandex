import { ValidationTypes } from '../../types/utils';

const parseValidationTypes = (type: string): ValidationTypes | null => {
	switch (type) {
	case 'login': return ValidationTypes.LOGIN;
	case 'password': return ValidationTypes.PASSWORD;
	case 'password_new': return ValidationTypes.PASSWORD;
	case 'password_old': return ValidationTypes.PASSWORD;
	case 'password_repeat': return ValidationTypes.PASSWORD;
	case 'first_name': return ValidationTypes.FIRST_NAME;
	case 'second_name': return ValidationTypes.SECOND_NAME;
	case 'email': return ValidationTypes.EMAIL;
	case 'phone': return ValidationTypes.PHONE;
	case 'name_in_chat': return ValidationTypes.LOGIN;

	default: return null;
	}
};

export default parseValidationTypes;
