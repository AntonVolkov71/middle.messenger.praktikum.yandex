import Profile from '../templates/components/profile';
import isValidation from '../utils/validations/isValidation';
import {ValidationTypes} from '../types/utils';
import {existUsers} from '../assets/mock-data';
import Component from "../services/Component";
import {Props} from "../types/component";
import parseFocusBlur from "../utils/validations/parseFocusBlur";
import toggleHideElement from "../utils/toggleHideElement";
import {Callback} from "../types/event-bus";

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
		&& passwordOld === existUsers[0]?.password
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

// {
// 	clbOpenChangeProfile, clbOpenChangePassword, clbSavePassword, clbSaveProfileData,
// 		clbChangeAvatar
// }

const profile = (props: Props = {}, callbacks: {[key:string]: Callback},
): Component => new Profile(
	'div',
	{
		...props,
		events: {
			changeProfile: (e: PointerEvent): void => {
				e.preventDefault();
				const clb: Callback | undefined = callbacks['clbOpenChangeProfile']
				clb ? clb() : null;
			},
			changePassword: (e: PointerEvent): void => {
				e.preventDefault();
				const clb: Callback | undefined = callbacks['clbOpenChangePassword']
				clb ? clb() : null;
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
							passwordOld: $form['password_old']['value'],
							passwordNew: $form['password']['value'],
							passwordRepeat: $form['password_repeat']['value'],
						};

						const isValidAllFields: boolean = isValidFormSavePassword(fields);

						const $errorText: HTMLElement | null = $form.querySelector('.form__error_form');
						console.log('$errorText',$errorText);
						if ($errorText) {
							toggleHideElement($errorText, isValidAllFields)
						}

						if (isValidAllFields) {
							const clb: Callback | undefined = callbacks['clbSavePassword']
							clb ? clb() : null;
						}
					}
				}
			},

			saveProfileData: (e: SubmitEvent) => {
				e.preventDefault();
				const $form: HTMLFormElement | null = e.target as HTMLFormElement;

				if ($form && $form instanceof HTMLElement) {
					const fields = {
						login: $form['login']?.value,
						phone: $form['phone']?.value,
						email: $form['email']?.value,
						firstName: $form['first_name']?.value,
						secondName: $form['second_name']?.value,
						nameInChat: $form['name_in_chat']?.value,
					};

					const isValidAllFields: boolean = isValidFormSaveData(fields);
					const $errorText: HTMLElement | null = $form.querySelector('.form__error_form');

					if ($errorText) {
						toggleHideElement($errorText, isValidAllFields)
					}

					if (isValidAllFields) {
						const clb: Callback | undefined = callbacks['clbSaveProfileData']
						clb ? clb() : null;
					}
				}
			},
			changeAvatar: (e: FocusEvent) => {
				e.preventDefault();
				const clb: Callback | undefined = callbacks['clbChangeAvatar']
				clb ? clb() : null;
			},
			focus: (e: FocusEvent): void => {
				parseFocusBlur(e)
			},
			blur: (e: FocusEvent): void => {
				parseFocusBlur(e)
			},
		},
		attr: {
			class: 'profile',
		},
	},
);

export default profile;
