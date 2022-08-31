import Store from '../Store';
import ChatsApi from '../../api/Chats';
import { API_PATHS } from '../../assets/constants';
import { ResponseCreateChat, ResponseError } from '../../types/api';
import { isStatusClientError } from '../../utils/api';
import { getChats } from '../../utils/middlewares/get-chats';

const store: Store = new Store();
const chatsApi = new ChatsApi(API_PATHS);

export const changeIsCreate = (isValue: boolean) => {
	store.setState('createChat.isCreate', isValue);
};

export const addError = (value: string): void => {
	store.setState('createChat.error', value);
};

export const createChat = async (nameChat: string) => {
	await addError('');

	const responseCreateChat: ResponseCreateChat = await chatsApi.createChats({ title: nameChat });

	if (isStatusClientError(responseCreateChat.statusCode)) {
		const message: ResponseError = responseCreateChat.data as ResponseError;
		const error: string = message.reason;

		addError(error);
		changeIsCreate(false);
	} else {
		changeIsCreate(false);
		await getChats();
	}
};

export const openCreateChat = () => {
	addError('');
	changeIsCreate(true);
};
