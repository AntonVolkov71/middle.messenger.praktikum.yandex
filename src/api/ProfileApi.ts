import { isStatusServerError } from '@utils/api';
import {
	ChangePasswords, ResponseProfile, ResponseSearchUser, SearchUser, User,
} from '@myTypes/api';
import { UserProfilePaths } from '@myTypes/api-paths';
import { Options } from '@myTypes/httpTranspport';
import Api from './Api';

class ProfileApi extends Api {
	private readonly userProfilePath: string = UserProfilePaths.USER;

	constructor(url: string) {
		super(url);
	}

	public async changeUserProfile(user: User): Promise<ResponseProfile> {
		const url = `${this.url}/${this.userProfilePath}/${UserProfilePaths.PROFILE}`;

		const options: Options = {
			...this.options,
			data: JSON.stringify(user),
		};

		const response: XMLHttpRequest = await this.put(url, options);

		return {
			statusCode: response.status,
			data: JSON.parse(response.response),
		};
	}

	public async changeUserPasswords(passwords: ChangePasswords): Promise<ResponseProfile> {
		const url = `${this.url}/${this.userProfilePath}/${UserProfilePaths.PASSWORD}`;

		const options: Options = {
			...this.options,
			data: JSON.stringify(passwords),
		};

		const response: XMLHttpRequest = await this.put(url, options);

		return {
			statusCode: response.status,
			data: typeof response.response === 'string' ? response.response : JSON.parse(response.response),
		};
	}

	public async changeAvatar(file: File): Promise<ResponseProfile> {
		const url = `${this.url}/${this.userProfilePath}/${UserProfilePaths.PROFILE_AVATAR}`;

		const data = new FormData();
		data.append('avatar', file);

		const options: Options = {
			...this.options,
			headers: {
			},
			data,
		};
		const response: XMLHttpRequest = await this.put(url, options);

		return {
			statusCode: response.status,
			data: isStatusServerError(response.status) ? response.response : JSON.parse(response.response),
		};
	}

	public async searchUser(data: SearchUser):Promise<ResponseSearchUser> {
		const url = `${this.url}/${UserProfilePaths.USER}/${UserProfilePaths.SEARCH}`;

		const options: Options = {
			...this.options,
			data: JSON.stringify(data),
		};

		const response: XMLHttpRequest = await this.post(url, options);

		return {
			statusCode: response.status,
			data: isStatusServerError(response.status) ? response.response : JSON.parse(response.response),
		};
	}
}

export default ProfileApi;
