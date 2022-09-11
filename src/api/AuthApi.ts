import { Options } from '@myTypes/httpTranspport';
import { AuthPaths } from '@myTypes/api-paths';
import { AuthResponse, SigninDto, SignupDto } from '@myTypes/api';
import Api from './Api';

class AuthApi extends Api {
	private readonly authPath: string = AuthPaths.AUTH;

	constructor(url: string) {
		super(url);
	}

	public async signin(data: SigninDto): Promise<AuthResponse> {
		const url = `${this.url}/${this.authPath}/${AuthPaths.SIGN_IN}`;

		const options: Options = {
			...this.options,
			data: JSON.stringify(data),
		};

		const response: XMLHttpRequest = await this.post(url, options);

		return {
			statusCode: response.status,
			message: response.response,
		};
	}

	public async signup(data: SignupDto): Promise<AuthResponse> {
		const url = `${this.url}/${this.authPath}/${AuthPaths.SIGN_UP}`;

		const options: Options = {
			...this.options,
			data: JSON.stringify(data),
		};

		const response: XMLHttpRequest = await this.post(url, options);

		return {
			statusCode: response.status,
			message: response.response,
		};
	}

	public async getUser(): Promise<AuthResponse> {
		const url = `${this.url}/${this.authPath}/${AuthPaths.USER}`;

		const options: Options = {
			...this.options,
		};

		const response = await this.get(url, options);

		return {
			statusCode: response.status,
			message: response.response,
		};
	}

	public async logout() {
		const url = `${this.url}/${this.authPath}/${AuthPaths.LOGOUT}`;

		const options: Options = {
			...this.options,
		};

		const response = await this.post(url, options);

		return {
			statusCode: response.status,
			message: response.response,
		};
	}
}

export default AuthApi;
