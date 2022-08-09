import Profile from '../templates/components/profile';
import isValidation from '../utils/validations/isValidation';
import { ValidationTypes } from '../types/utils';
import { existUsers } from '../assets/mock-data';
import Component from '../services/Component';
import { Props } from '../types/component';
import parseFocusBlur from '../utils/validations/parseFocusBlur';
import toggleHideElement from '../utils/toggleHideElement';
import { Callback } from '../types/event-bus';

const isValidFormSavePassword = (fields: { [key: string]: string | undefined }) => {
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

const isValidFormSaveData = (fields: { [key: string]: string | undefined }): boolean => {
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

const profile = (callbacks: { [key: string]: Callback }, props: Props = {}): Component => new Profile(
	'div',
	{
		...props,
		events: {
			changeProfile: (e: PointerEvent): void => {
				e.preventDefault();
				const clb: Callback | undefined = callbacks.clbOpenChangeProfile;
				if (clb) {
					clb();
				}
			},
			changePassword: (e: PointerEvent): void => {
				e.preventDefault();
				const clb: Callback | undefined = callbacks.clbOpenChangePassword;
				if (clb) {
					clb();
				}
			},
			exitProfile: (e: PointerEvent) => {
				e.preventDefault();
				console.info('exitProfile');
			},
			savePassword: (e: SubmitEvent) => {
				e.preventDefault();
				const $form: HTMLFormElement | null = e.target as HTMLFormElement;

				if ($form !== null && $form instanceof HTMLElement) {
					if ('password_old' in $form && 'password' in $form && 'password_repeat' in $form) {
						const fields: { [key: string]: string | undefined } = {
							passwordOld: $form.password_old.value,
							passwordNew: $form.password.value,
							passwordRepeat: $form.password_repeat.value,
						};

						const isValidAllFields: boolean = isValidFormSavePassword(fields);

						const $errorText: HTMLElement | null = $form.querySelector('.form__error_form');
						if ($errorText) {
							toggleHideElement($errorText, isValidAllFields);
						}

						if (isValidAllFields) {
							const clb: Callback | undefined = callbacks.clbSavePassword;
							if (clb) {
								clb(fields);
							}
						}
					}
				}
			},

			saveProfileData: (e: SubmitEvent) => {
				e.preventDefault();
				const $form: HTMLFormElement | null = e.target as HTMLFormElement;

				if ($form && $form instanceof HTMLElement) {
					const fields = {
						login: $form.login?.value,
						phone: $form.phone?.value,
						email: $form.email?.value,
						firstName: $form.first_name?.value,
						secondName: $form.second_name?.value,
						nameInChat: $form.name_in_chat?.value,
					};

					const isValidAllFields: boolean = isValidFormSaveData(fields);
					const $errorText: HTMLElement | null = $form.querySelector('.form__error_form');

					if ($errorText) {
						toggleHideElement($errorText, isValidAllFields);
					}

					if (isValidAllFields) {
						const clb: Callback | undefined = callbacks.clbSaveProfileData;
						if (clb) {
							clb(fields);
						}
					}
				}
			},
			changeAvatar: (e: FocusEvent) => {
				e.preventDefault();
				const clb: Callback | undefined = callbacks.clbChangeAvatar;
				if (clb) {
					clb();
				}
			},
			focus: (e: FocusEvent): void => {
				parseFocusBlur(e);
			},
			blur: (e: FocusEvent): void => {
				parseFocusBlur(e);
			},
		},
		attr: {
			class: 'profile',
		},
	},
);

export default profile;
