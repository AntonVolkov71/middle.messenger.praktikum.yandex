import { API_PATHS, LOCALE_PATHS } from '@assets/constants';
import Actions from '@store/actions';
import ChatsApi from '@api/Chats';
import { isStatusClientError, isStatusServerError } from '@utils/api';

export const getChats = async (): Promise<void> => {
	const { pathname } = window.location;

	if (pathname === LOCALE_PATHS.messenger) {
		const chatsApi = new ChatsApi(API_PATHS);
		const response = await chatsApi.getChats();

		const isClientError = isStatusClientError(response.statusCode);
		const isServerError = isStatusServerError(response.statusCode);

		if (isClientError || isServerError) {
			const error: string = 'Ошибка загрузки чатов';

			Actions.chats.addError(error);
		} else {
			Actions.chats.setChats(response.data);
		}
	}
};
