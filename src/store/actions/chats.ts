import { isStatusClientError, isStatusServerError } from '@utils/api';
import { API_PATHS } from '@assets/constants';
import { Chat } from '@myTypes/state';
import {
	AddOrDeleteUser, ResponseError, UserChat, UserDto,
} from '@myTypes/api';
import Store from '@store/Store';
import ChatsApi from '@api/Chats';
import ProfileApi from '@api/ProfileApi';
import Actions from './index';

const store: Store = new Store();
const chatsApi = new ChatsApi(API_PATHS);
const profileApi = new ProfileApi(API_PATHS);

export const addError = (value: string): void => {
	store.setState('chats.error', value);
};

export const setChats = (chats: Chat[]) => {
	store.setState('chats.chats', chats);
};

export const clearUserChat = () => {
	store.setState('chats.userChats', []);
};

export const getUserChat = async (chatId: number) => {
	clearUserChat();

	const response = await chatsApi.getUserChats(chatId);

	if (isStatusClientError(response.statusCode) || isStatusServerError(response.statusCode)) {
		const message: ResponseError = response.data as ResponseError;
		const error: string = message.reason;
		await Actions.chatMenu.addError(error);
	} else {
		const users = response.data as UserChat[];
		Actions.chatMenu.setUsers(users);
		Actions.chatMenu.setChatId(chatId);
	}
};

export const searchUserByLogin = async (login: string): Promise<number | null> => {
	const users = await profileApi.searchUser({
		login,
	});

	if (isStatusClientError(users.statusCode) || isStatusServerError(users.statusCode)) {
		return null;
	}
	const data: UserDto[] = users.data as UserDto[];

	if (data.length > 0 && data) {
		const userId: number | undefined = data[0]?.id;
		return userId || null;
	}

	return null;
};

export const addOrDeleteUsers = async (
	userId: string,
	chatId: number,
	type: AddOrDeleteUser,
): Promise<string | boolean> => {
	const isSuccess = true;

	const response = await chatsApi.addUser(
		{
			users: [userId],
			chatId,
		},
		type,
	);

	if (isStatusClientError(response.statusCode) || isStatusServerError(response.statusCode)) {
		return 'Ошибка милок';
	}

	return isSuccess;
};
