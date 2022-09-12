import { isStatusClientError } from '@utils/api';
import { API_PATHS, LOCALE_PATHS } from '@assets/constants';
import { AuthResponse, ResponseError, SignupDto } from '@myTypes/api';
import AuthApi from '@api/AuthApi';
import Actions from './index';

const authApi = new AuthApi(API_PATHS);

export const logoutAction = async (): Promise<void> => {
	await authApi.logout();
};

export const signinAction = async (login: string = '', password: string = ''): Promise<void> => {
	await logoutAction();
	await Actions.login.addError('');

	const signin: AuthResponse = await authApi.signin({
		login,
		password,
	});

	if (isStatusClientError(signin.statusCode)) {
		const message: ResponseError = JSON.parse(signin.message) as ResponseError;
		const error: string = message.reason;

		await Actions.login.addError(error);
	} else {
		await Actions.login.addError('');

		window.location.href = LOCALE_PATHS.messenger;
	}
};

export const signupAction = async (data: SignupDto): Promise<void> => {
	await logoutAction();
	await Actions.auth.addError('');

	const signup: AuthResponse = await authApi.signup(data);

	if (isStatusClientError(signup.statusCode)) {
		const message: ResponseError = JSON.parse(signup.message) as ResponseError;
		const error: string = message.reason;

		await Actions.auth.addError(error);
	} else {
		await Actions.auth.addError('');

		window.location.href = LOCALE_PATHS.messenger;
	}
};
