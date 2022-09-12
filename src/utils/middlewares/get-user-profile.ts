import { API_PATHS } from '@assets/constants';
import { UserDto } from '@myTypes/api';
import Actions from '@store/actions';
import AuthApi from '@api/AuthApi';

const getUserProfile = async (isNecessary:boolean = false): Promise<void> => {
	if (isNecessary) {
		const authApi = new AuthApi(API_PATHS);
		const response = await authApi.getUser();

		if (response.statusCode === 200) {
			const userDto: UserDto = JSON.parse(response.message) as UserDto;

			await Actions.profile.setProfileData(userDto);
		}
	}
};

export default getUserProfile;
