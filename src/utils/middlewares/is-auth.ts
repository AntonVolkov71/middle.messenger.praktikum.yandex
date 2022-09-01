import AuthApi from '../../api/AuthApi';
import { API_PATHS, LOCALE_PATHS } from '../../assets/constants';

const isAuth = async (): Promise<void> => {
	const { pathname } = window.location;

	if (pathname !== LOCALE_PATHS.main && pathname !== LOCALE_PATHS.signUp) {
		const authApi = new AuthApi(API_PATHS);
		const alreadyAuth = await authApi.getUser();

		if (alreadyAuth.statusCode !== 200) {
			window.location.href = LOCALE_PATHS.main;
		}
	}
};

export default isAuth;
