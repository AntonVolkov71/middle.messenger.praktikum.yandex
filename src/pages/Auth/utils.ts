import Component from '../../services/Component';
import FieldFormElement from '../../components/FieldForm';
import { MAX_LENGTH_LOGIN, MIN_LENGTH_LOGIN, MINIMUM_FIELD_FORM } from '../../assets/config';
import { TEXT_ERROR } from '../../assets/constants';
import { myProfile } from '../../assets/mock-data';

export const createFieldEmail = (): Component => new FieldFormElement('div', {
	inputId: 'auth-email',
	...MINIMUM_FIELD_FORM.email,
});

export const createFieldLogin = (): Component => new FieldFormElement('div', {
	inputId: 'login-input',
	value: 'Anton',
	...MINIMUM_FIELD_FORM.login,
});

export const createFieldFirstName = (): Component => new FieldFormElement('div', {
	name: 'first_name',
	label: 'Имя',
	inputId: 'auth-first_name',
	textError: TEXT_ERROR.noValidFirstSecondName,
	...MINIMUM_FIELD_FORM.name,
});

export const createFieldSecondName = (): Component => new FieldFormElement('div', {
	name: 'second_name',
	label: 'Фамилия',
	inputId: 'auth-second_name',
	textError: TEXT_ERROR.noValidFirstSecondName,
	...MINIMUM_FIELD_FORM.name,
});

export const createFieldFormPhone = (): Component => new FieldFormElement('div', {
	inputId: 'auth-phone',
	...MINIMUM_FIELD_FORM.phone,
});

export const createFieldFormNameInChat = (): Component => new FieldFormElement('div', {
	type: 'text',
	name: 'name_in_chat',
	label: 'Имя в чате',
	inputId: 'auth-name-in-chat',
	value: myProfile.nameInChat,
	textError: TEXT_ERROR.noValidNameInChat,
	minlength: MIN_LENGTH_LOGIN,
	maxlength: MAX_LENGTH_LOGIN,
});

export const createFieldPassword = (): Component => new FieldFormElement('div', {
	inputId: 'auth-password',
	value: 'A12345678',
	...MINIMUM_FIELD_FORM.password,
});

export const createFieldPasswordRepeat = (): Component => new FieldFormElement('div', {
	inputId: 'auth-password-more',
	...MINIMUM_FIELD_FORM.passwordRepeat,
});
