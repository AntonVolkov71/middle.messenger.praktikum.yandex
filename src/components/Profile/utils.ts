import Component from '../../services/Component';
import FieldFormElement from '../FieldForm';
import {
	MAX_LENGTH_LOGIN,
	MAX_LENGTH_PASSWORD,
	MIN_LENGTH_LOGIN,
	MIN_LENGTH_PASSWORD,
	MINIMUM_FIELD_FORM,
} from '../../assets/config';
import { TEXT_ERROR } from '../../assets/constants';
import { myProfile } from '../../assets/mock-data';

export const createFieldEmail = (): Component => new FieldFormElement('div', {
	inputId: 'profile-email',
	value: myProfile.email,
	disabled: true,
	...MINIMUM_FIELD_FORM.email,
});

export const createFieldLogin = (): Component => new FieldFormElement('div', {
	inputId: 'profile-login',
	value: myProfile.login,
	disabled: true,
	...MINIMUM_FIELD_FORM.login,
});

export const createFieldFirstName = (): Component => new FieldFormElement('div', {
	name: 'first_name',
	label: 'Имя',
	value: myProfile.firstName,
	inputId: 'profile-first_name',
	disabled: true,
	textError: TEXT_ERROR.noValidFirstSecondName,
	...MINIMUM_FIELD_FORM.name,
});

export const createFieldSecondName = (): Component => new FieldFormElement('div', {
	name: 'second_name',
	label: 'Фамилия',
	inputId: 'profile-second_name',
	disabled: true,
	value: myProfile.secondName,
	textError: TEXT_ERROR.noValidFirstSecondName,
	...MINIMUM_FIELD_FORM.name,
});

export const createFieldFormPhone = (): Component => new FieldFormElement('div', {
	inputId: 'profile-phone',
	disabled: true,
	value: myProfile.phone,
	...MINIMUM_FIELD_FORM.phone,
});

export const createFieldFormNameInChat = (): Component => new FieldFormElement('div', {
	type: 'text',
	name: 'name_in_chat',
	label: 'Имя в чате',
	inputId: 'profile-name-in-chat',
	disabled: true,
	value: myProfile.nameInChat,
	textError: TEXT_ERROR.noValidNameInChat,
	minlength: MIN_LENGTH_LOGIN,
	maxlength: MAX_LENGTH_LOGIN,
});

export const createFieldPasswordOld = (): Component => new FieldFormElement('div', {
	inputId: 'profile-password_old',
	value: myProfile.password,
	name: 'password_old',
	label: 'Старый пароль',
	type: 'password',
	minlength: MIN_LENGTH_PASSWORD,
	maxlength: MAX_LENGTH_PASSWORD,
	textError: TEXT_ERROR.noValidPasswordOld,
});

export const createFieldPasswordNew = (): Component => new FieldFormElement('div', {
	inputId: 'profile-password_new',
	name: 'password',
	label: 'Новый пароль',
	type: 'password',
	minlength: MIN_LENGTH_PASSWORD,
	maxlength: MAX_LENGTH_PASSWORD,
	textError: TEXT_ERROR.noValidPassword,
});

export const createFieldPasswordRepeat = (): Component => new FieldFormElement('div', {
	inputId: 'profile-password_new-repeat',
	name: 'password_repeat',
	label: 'Повторите пароль',
	type: 'password',
	minlength: MIN_LENGTH_PASSWORD,
	maxlength: MAX_LENGTH_PASSWORD,
	textError: TEXT_ERROR.noValidPasswordRepeat,
});

export interface FieldsFormData {
	[key: string]: Component
}

export const changeDisabledFormFields = (fieldsFormData: FieldsFormData, disabled: boolean) => {
	Object.values(fieldsFormData).forEach((item) => {
		if (item instanceof Component) {
			item.setProps({
				disabled,
			});
		}
	});
};
