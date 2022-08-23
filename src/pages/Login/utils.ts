import FieldFormElement from '../../components/FieldForm';
import {
	MINIMUM_FIELD_FORM,
} from '../../assets/config';
import Component from '../../services/Component';

export const createFieldLogin = (): Component => new FieldFormElement('div', {
	inputId: 'login-input',
	value: 'Anton',
	...MINIMUM_FIELD_FORM.login,
});

export const createFieldPassword = (): Component => new FieldFormElement('div', {
	inputId: 'password-input',
	value: 'A12345678',
	...MINIMUM_FIELD_FORM.password,
});
