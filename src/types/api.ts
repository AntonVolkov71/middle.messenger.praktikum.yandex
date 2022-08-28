export interface ResponseError {
	reason: string;
}

export interface AuthResponse {
	statusCode: number;
	message: string;
}

type DataProfile = ResponseError | UserDto | string

export interface ResponseProfile {
	statusCode: number,
	data: DataProfile
}

export interface SigninDto {
	login: string;
	password: string;
}

export interface ChangePasswords {
	oldPassword: string;
	newPassword: string;
}

export interface User {
	first_name: string;
	second_name: string;
	display_name: string;
	login: string;
	email: string;
	phone: string;
}

export interface UserDto extends User {
	id: number;
	avatar: string;
}

export interface SignupDto extends User {
	password: string;
}

export interface PasswordRepeat {
	password_repeat: string;
}
