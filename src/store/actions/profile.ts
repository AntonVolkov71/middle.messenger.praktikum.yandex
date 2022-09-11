import { isStatusClientError, isStatusServerError } from '@utils/api';
import { API_PATHS } from '@assets/constants';
import {
	ChangePasswords,
	ResponseError, ResponseProfile, User, UserDto,
} from '@myTypes/api';
import Store from '@store/Store';
import ProfileApi from '@api/ProfileApi';
import Actions from './index';

const store: Store = new Store();
const profileApi = new ProfileApi(API_PATHS);

export const addError = (value: string): void => {
	store.setState('profile.error', value);
};

export const setProfileData = (userDto: UserDto) => {
	store.setState('profile.user', userDto);
};

export const changeIsShow = (value: boolean) => {
	store.setState('profile.isShow', value);
};

export const changeIsChangePassword = (value: boolean) => {
	store.setState('profile.isChangePassword', value);
};

export const changeProfileData = async (user: User) => {
	await addError('');

	const response: ResponseProfile = await profileApi.changeUserProfile(user);

	if (isStatusClientError(response.statusCode)) {
		const message: ResponseError = response.data as ResponseError;
		const error: string = message.reason;

		await addError(error);
	} else {
		await addError('');

		const userDto: UserDto = response.data as UserDto;
		setProfileData(userDto);

		changeIsShow(true);
	}
};

export const changePassword = async (passwords: ChangePasswords) => {
	await addError('');

	const response: ResponseProfile = await profileApi.changeUserPasswords(passwords);

	if (isStatusClientError(response.statusCode)) {
		const message: ResponseError = response.data as ResponseError;
		const error: string = message.reason;

		await addError(error);
	} else {
		changeIsShow(true);
		changeIsChangePassword(false);
	}
};

export const changeAvatar = async (file: File, fileName: string) => {
	const response = await profileApi.changeAvatar(file);

	const isClientError = isStatusClientError(response.statusCode);
	const isServerError = isStatusServerError(response.statusCode);

	if (isClientError || isServerError) {
		let error: string = '';

		if (isClientError) {
			const message: ResponseError = response.data as ResponseError;
			error = message.reason;
		}

		if (isServerError) {
			error = response.data as string;
		}

		Actions.inputFile.addErrorTitle(error);
	} else {
		Actions.inputFile.addSuccessTitle('Вы справились мой друг, аватар загружен');
		Actions.inputFile.addNameFile(fileName);

		const userDto: UserDto = response.data as UserDto;
		setProfileData(userDto);
	}
};
