import Store from '../Store';
import Actions from './index';
import { AddOrDeleteUser, UserChat } from '../../types/api';
import { getChats } from '../../utils/middlewares/get-chats';

const store: Store = new Store();

export const addError = (value: string) => {
	store.setState('chatMenu.error', value);
};

export const setUsers = (users: UserChat[]) => {
	store.setState('chatMenu.users', users);
};

export const setChatId = (chatId: number) => {
	store.setState('chatMenu.chatId', chatId);
};

export const addUsers = async (user: string) => {
	await addError('');

	const { chatId }: { chatId: number | null } = store.getState().chatMenu;

	if (chatId !== null) {
		const idUser = await Actions.chats.searchUserByLogin(user);

		if (idUser !== null) {
			const response: string | boolean = await Actions.chats.addOrDeleteUsers(
				idUser.toString(),
				chatId,
				AddOrDeleteUser.PUT,
			);

			if (typeof response === 'boolean' && response) {
				await Actions.chats.getUserChat(chatId);
			} else {
				await addError(response || 'ошибка');
			}
		}
	}
};

export const deleteUser = async (userId: string) => {
	const { chatId }: { chatId: number | null } = store.getState().chatMenu;

	if (chatId !== null) {
		const response: string | boolean = await Actions.chats.addOrDeleteUsers(userId, chatId, AddOrDeleteUser.DELETE);

		if (typeof response === 'boolean' && !response) {
			await addError(response || 'ошибка');
		} else {
			await getChats();
			await Actions.chats.getUserChat(chatId);
		}
	}
};
