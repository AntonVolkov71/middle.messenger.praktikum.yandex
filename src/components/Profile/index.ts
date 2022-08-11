import tpl from './tpl';
import './style.scss';
import Component from '../../services/Component';
import { myProfile } from '../../assets/mock-data';
import toggleHideElement from '../../utils/toggleHideElement';
import parseFocusBlur from '../../utils/validations/parseFocusBlur';
import { Attribute } from '../../types/component';
import { User } from '../../types/mock-data';
import { FieldsAllData, FieldsPasswords } from '../../types/form';
import isValidFormSavePassword from '../../utils/validations/isValidFormSavePassword';
import isValidFormSaveData from '../../utils/validations/isValidFormSaveData';
import InputFile from '../Input-file';
import {
	changeDisabledFormFields,
	createFieldEmail,
	createFieldFirstName, createFieldFormNameInChat,
	createFieldFormPhone,
	createFieldLogin, createFieldPasswordNew, createFieldPasswordOld, createFieldPasswordRepeat,
	createFieldSecondName, FieldsFormData,
} from './utils';

let isShow = true;

interface ProfileElementProps extends Attribute {
	isShow: boolean,
	myProfile: User,
	changePassword?: boolean,
	oldPassword?: string,
	inputFile?: Component,
	fieldFormFirstName: Component,
	fieldFormSecondName: Component,
	fieldFormLogin: Component,
	fieldFormPhone: Component,
	fieldFormNameInChat: Component,
	fieldFormEmail: Component,
	fieldFormPasswordNew: Component,
	fieldFormPasswordRepeat: Component,
	fieldFormPasswordOld: Component,
	events: {
		changeProfile: () => void,
		changePassword: () => void,
		exitProfile: (e: PointerEvent) => void,
		savePassword: (e: SubmitEvent) => void,
		saveProfileData: (e: SubmitEvent) => void,
		changeAvatar: (e: FocusEvent) => void,
		blur: (e: FocusEvent) => void,
		focus: (e: FocusEvent) => void
	}
}

class ProfileElement extends Component {
	constructor(tag: string, props: ProfileElementProps) {
		super(tag, props);

		const fieldsFormData: FieldsFormData = {
			fieldFormEmail: props.fieldFormEmail,
			fieldFormFirstName: props.fieldFormFirstName,
			fieldFormSecondName: props.fieldFormSecondName,
			fieldFormLogin: props.fieldFormLogin,
			fieldFormPhone: props.fieldFormPhone,
			fieldFormNameInChat: props.fieldFormNameInChat,
		};
		this.props.fieldsFormData = fieldsFormData;

		this.props.events.changeProfile = props.events.changeProfile.bind(this);
		this.props.events.changePassword = props.events.changePassword.bind(this);
		this.props.events.savePassword = props.events.savePassword.bind(this);
		this.props.events.saveProfileData = props.events.saveProfileData.bind(this);
		this.props.events.changeAvatar = props.events.changeAvatar.bind(this);
	}

	addEvents(): void {
		if (this.element) {
			const $changeProfile = this.element.querySelector('.profile__change-data');
			$changeProfile?.addEventListener('click', () => this.props.events.changeProfile());

			const $saveProfileData = this.element.querySelector('.profile__data');
			$saveProfileData?.addEventListener('submit', this.props.events.saveProfileData);

			const $changePassword = this.element.querySelector('.profile__button-change-password');
			$changePassword?.addEventListener('click', () => this.props.events.changePassword());

			const $exitProfile = this.element.querySelector('.profile__signout');
			$exitProfile?.addEventListener('click', this.props.events.exitProfile);

			const $formChangePassword = this.element.querySelector('.profile__change-password');
			$formChangePassword?.addEventListener('submit', this.props.events.savePassword);

			const $changeAvatar = this.element.querySelector('.profile__change-avatar');
			$changeAvatar?.addEventListener('click', this.props.events.changeAvatar);

			this.element.querySelectorAll('.form__input').forEach((input) => {
				input.addEventListener('focus', this.props.events.focus);
				input.addEventListener('blur', this.props.events.blur);
			});
		}
	}

	render(): Node | null {
		return this.compile(tpl);
	}
}

const Profile: Component = new ProfileElement(
	'div',
	{
		fieldFormEmail: createFieldEmail(),
		fieldFormFirstName: createFieldFirstName(),
		fieldFormSecondName: createFieldSecondName(),
		fieldFormLogin: createFieldLogin(),
		fieldFormPhone: createFieldFormPhone(),
		fieldFormNameInChat: createFieldFormNameInChat(),
		fieldFormPasswordOld: createFieldPasswordOld(),
		fieldFormPasswordNew: createFieldPasswordNew(),
		fieldFormPasswordRepeat: createFieldPasswordRepeat(),
		myProfile,
		isShow,
		events: {
			changeProfile(): void {
				if (this instanceof ProfileElement) {
					isShow = false;
					changeDisabledFormFields(this.props.fieldsFormData, isShow);

					this.setProps({
						isShow,
					});
				}
			},

			changePassword(): void {
				if (this instanceof ProfileElement) {
					this.setProps({
						isShow: false,
						changePassword: true,
						oldPassword: 'A12345678',
					});
				}
			},

			exitProfile(e: PointerEvent): void {
				e.preventDefault();
				console.info('exit profile');
			},

			savePassword(e: SubmitEvent): void {
				e.preventDefault();
				const $form: HTMLFormElement | null = e.target as HTMLFormElement;

				if ($form !== null && $form instanceof HTMLElement) {
					if ('password_old' in $form && 'password' in $form && 'password_repeat' in $form) {
						const fields: FieldsPasswords = {
							passwordOld: $form.password_old?.value || '',
							passwordNew: $form.password?.value || '',
							passwordRepeat: $form.password_repeat?.value || '',
						};

						const isValidAllFields: boolean = isValidFormSavePassword(fields);
						const $errorText: HTMLElement | null = $form.querySelector('.form__error_form');

						if ($errorText) {
							toggleHideElement($errorText, isValidAllFields);
						}
						if (isValidAllFields) {
							console.info('save passwords', fields);

							if (this instanceof ProfileElement) {
								this.setProps({
									isShow: true,
									changePassword: false,
								});
							}
						}
					}
				}
			},

			saveProfileData(e: SubmitEvent): void {
				e.preventDefault();
				const $form: HTMLFormElement | null = e.target as HTMLFormElement;

				if ($form && $form instanceof HTMLElement) {
					const fields: FieldsAllData = {
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
						console.info('data profile', fields);

						if (this instanceof ProfileElement) {
							isShow = true;
							changeDisabledFormFields(this.props.fieldsFormData, isShow);

							this.setProps({
								isShow,
								myProfile: { ...myProfile, ...fields },
							});
						}
					}
				}
			},

			changeAvatar(e: FocusEvent): void {
				e.preventDefault();
				if (this instanceof ProfileElement) {
					this.setProps({
						inputFile: InputFile,
					});
				}
			},

			focus(e: FocusEvent): void {
				parseFocusBlur(e);
			},

			blur(e: FocusEvent): void {
				parseFocusBlur(e);
			},
		},
		attr: {
			class: 'profile',
		},
	},
);

export default Profile;
