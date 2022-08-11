import { TEXT_ERROR } from './constants';

export const MIN_LENGTH_PASSWORD: number = 8;
export const MAX_LENGTH_PASSWORD: number = 40;

export const MIN_LENGTH_LOGIN: number = 3;
export const MAX_LENGTH_LOGIN: number = 20;

export const MIN_LENGTH_NAME: number = 1;

export const MIN_LENGTH_PHONE: number = 8;
export const MAX_LENGTH_PHONE: number = 15;

export const MINIMUM_FIELD_FORM = {
	email: {
		name: 'email',
		label: 'Почта',
		type: 'email',
		textError: TEXT_ERROR.noValidEmail,
	},
	login: {
		name: 'login',
		label: 'Логин',
		type: 'text',
		minlength: MIN_LENGTH_LOGIN,
		maxlength: MAX_LENGTH_LOGIN,
		textError: TEXT_ERROR.noValidLogin,
	},
	password: {
		name: 'password',
		label: 'Пароль',
		type: 'password',
		minlength: MIN_LENGTH_PASSWORD,
		maxlength: MAX_LENGTH_PASSWORD,
		textError: TEXT_ERROR.noValidPassword,
	},
	passwordRepeat: {
		name: 'password_repeat',
		label: 'Пароль (еще раз)',
		type: 'password',
		minlength: MIN_LENGTH_PASSWORD,
		maxlength: MAX_LENGTH_PASSWORD,
		textError: TEXT_ERROR.noValidPasswordRepeat,
	},
	name: {
		type: 'text',
		minlength: MIN_LENGTH_NAME,
	},
	phone: {
		type: 'tel',
		name: 'phone',
		label: 'Телефон',
		minlength: MIN_LENGTH_PHONE,
		maxlength: MAX_LENGTH_PHONE,
		textError: TEXT_ERROR.noValidPhone,
	},
};
