import parseFocusBlur from '@utils/validations/parseFocusBlur';
import { Attribute } from '@myTypes/component';
import isValidFormSavePassword from '@utils/validations/isValidFormSavePassword';
import isValidFormSaveData from '@utils/validations/isValidFormSaveData';
import { ProfileState } from '@myTypes/state';
import { ChangePasswords, User } from '@myTypes/api';
import { API_PATHS_RESOURCE, LOCALE_PATHS } from '@assets/constants';
import Component from '@services/Component';
import { connect, mapProfileToProps } from '@store/maps';
import Actions from '@store/actions';
import InputFile from '@components/Input-file';

import tpl from './tpl';
import './style.scss';

interface ProfileElementProps extends Attribute, ProfileState {
	isShow: boolean,
	changePassword?: boolean,
	inputFile?: Component,
	apiResource: string,
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

			this.element.querySelectorAll('.form__input')
				.forEach((input) => {
					input.addEventListener('focus', this.props.events.focus);
					input.addEventListener('blur', this.props.events.blur);
				});
		}
	}

	render(): Node | null {
		return this.compile(tpl, this.props);
	}
}

const propsProfile = {
	events: {
		changeProfile(): void {
			if (this instanceof ProfileElement) {
				Actions.profile.changeIsShow(false);
			}
		},

		changePassword(): void {
			if (this instanceof ProfileElement) {
				Actions.profile.changeIsChangePassword(true);
				Actions.profile.changeIsShow(false);
			}
		},

		async exitProfile(e: PointerEvent): Promise<void> {
			e.preventDefault();
			await Actions.authApi.logoutAction();

			window.location.href = LOCALE_PATHS.main;
		},

		async savePassword(e: SubmitEvent): Promise<void> {
			e.preventDefault();
			const $form: HTMLFormElement | null = e.target as HTMLFormElement;

			if ($form !== null && $form instanceof HTMLElement) {
				if ('password_old' in $form && 'password' in $form && 'password_repeat' in $form) {
					const passwords: ChangePasswords = {
						oldPassword: $form.password_old?.value || '',
						newPassword: $form.password?.value || '',
					};

					const repeatPassword: string = $form.password_repeat?.value || '';

					const isValidAllFields: boolean = isValidFormSavePassword({
						...passwords,
						repeatPassword,
					});

					if (isValidAllFields) {
						await Actions.profile.changePassword(passwords);
					}
				}
			}
		},

		async saveProfileData(e: SubmitEvent): Promise<void> {
			e.preventDefault();
			const $form: HTMLFormElement | null = e.target as HTMLFormElement;

			if ($form && $form instanceof HTMLElement) {
				const userData: User = {
					login: $form.login?.value,
					phone: $form.phone?.value,
					email: $form.email?.value,
					first_name: $form.first_name?.value,
					second_name: $form.second_name?.value,
					display_name: $form.display_name?.value,
				};

				const isValidUserData: boolean = isValidFormSaveData(userData);

				if (isValidUserData) {
					await Actions.profile.changeProfileData(userData);
				}
			}
		},

		changeAvatar(e: FocusEvent): void {
			e.preventDefault();
			if (this instanceof ProfileElement) {
				this.setProps({
					isOpenChangeAvatar: true,
				});

				Actions.inputFile.addTitle('Выберите изображение для аватара');

				const self = this;

				InputFile.setProps({
					getFile: Actions.profile.changeAvatar,
					close: () => {
						self.setProps({
							isOpenChangeAvatar: false,
						});

						Actions.inputFile.clearTitle();
					},
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
	isOpenChangeAvatar: false,
	inputFile: InputFile,
	apiResource: API_PATHS_RESOURCE,
	attr: {
		class: 'profile',
	},
};

const ProfileWithState = connect(mapProfileToProps)(ProfileElement);

const Profile: Component = new ProfileWithState(
	'div',
	propsProfile,
);

export default Profile;
