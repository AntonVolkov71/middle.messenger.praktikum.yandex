import { Chat } from './state';

export interface UserChat extends Omit<UserDto, 'password'> {
	role: string
}

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

export interface ResponseChats {
	statusCode: number,
	data: Chat[]
}

export interface Token {
	token: string
}

type ChatsToken = ResponseError | Token | string

export interface ResponseChatsToken {
	statusCode: number,
	data: ChatsToken
}

type DataCreateChat = ResponseError | { id: number }

export interface ResponseCreateChat {
	statusCode: number,
	data: DataCreateChat
}

type UsersChatData = ResponseError | UserChat[] | string

export interface ResponseUserChat {
	statusCode: number,
	data: UsersChatData
}

export enum AddOrDeleteUser {
	DELETE ='delete',
	PUT ='put',
}

export interface Resource {
	id: number;
	user_id: number;
	path: string;
	content_type: string;
	content_size: number;
	filename: string;
	upload_date: string;
}

export interface AddUser {
	users: string[],
	chatId: number
}

type SearchUserData = UserDto[] | ResponseError | string

export interface ResponseSearchUser {
	statusCode: number,
	data: SearchUserData
}

export interface SearchUser {
	login: string;
}

type ResourceData = ResponseError | Resource | string

export interface ResponseResource {
	statusCode: number,
	data: ResourceData
}

export interface SigninDto {
	login: string;
	password: string;
}

export interface ChangePasswords {
	oldPassword: string;
	newPassword: string;
}

export interface CreateChatDto {
	title: string;
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
