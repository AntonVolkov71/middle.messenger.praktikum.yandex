import { UserChat, UserDto } from './api';

export enum StoreEvents {
	UPDATED = 'updated'
}

interface ErrorState {
	error?: string;
}

export interface LoginState extends ErrorState {
}

export interface AuthState extends ErrorState {
}

export interface ProfileState extends ErrorState {
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

export interface Chat {
	id: number;
	title: string;
	avatar: string;
	unread_count: number;
	last_message?: {
		user: UserDto;
		time: string;
		content: string
	};
	active?: boolean
}

export interface SendMessageState {
	idSendFile: number | undefined,
	isOpenGetFile: boolean;
}

export interface ChatState extends ErrorState {
	chats: Chat[],
}

export interface CreateChatState extends ErrorState {
	isCreate: boolean;
}

export interface ActiveChatState extends ErrorState {
	connectionOpen: string;
	connectionClose: string;
	isOpenMenuChat: boolean;
}

export interface ChatMenuState extends ErrorState {
	users: UserChat[],
	chatId: number | null,
}

export interface FileMessage {
	id: number ;
	user_id: number ;
	path: string ;
	filename: string ;
	content_type: string ;
	content_size: number ;
	upload_date: string ;
}

export interface Message {
	chat_id: number ;
	time: string ;
	type: string ;
	user_id: string ;
	content: string ;
	file?: FileMessage
}

export interface MessagesState {
	messages: Message[],
	idChat: number | null,
	myId: number | null;
}

export interface State {
	login: LoginState,
	auth: AuthState,
	profile: ProfileState,
	inputFile: InputFileState,
	chats: ChatState,
	createChat:CreateChatState,
	activeChat: ActiveChatState,
	sendMessage: SendMessageState,
	chatMenu: ChatMenuState,
	messages: MessagesState
}
