import { API_PATHS, LOCALE_PATHS } from '../../assets/constants';
import AuthApi from '../../api/AuthApi';
import Actions from '../../store/actions';
import { UserDto } from '../../types/api';

const getUserProfile = async (): Promise<void> => {
	const { pathname } = window.location;

	if (pathname === LOCALE_PATHS.settings) {
		const authApi = new AuthApi(API_PATHS);
		const response = await authApi.getUser();

		if (response.statusCode === 200) {
			const userDto: UserDto = JSON.parse(response.message) as UserDto;

			await Actions.profile.setProfileData(userDto);
		}
	}
};

export default getUserProfile;
