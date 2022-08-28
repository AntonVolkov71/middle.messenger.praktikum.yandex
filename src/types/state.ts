import { UserDto } from './api';

export enum StoreEvents {
	UPDATED = 'updated'
}

interface ErrorQuery {
	error?: string;
}

export interface LoginState extends ErrorQuery {
}

export interface AuthState extends ErrorQuery {
}

export interface ProfileState extends ErrorQuery {
	user: UserDto;
	isShow: boolean;
	isChangePassword: boolean;
	errorInputFile: string;
}

export interface InputFileState {
	title: string;
	errorTitle: string;
	successTitle: string;
	nameFile: string;
}
export interface State {
	login: LoginState,
	auth: AuthState,
	profile: ProfileState,
	inputFile: InputFileState
}
