import ChatsApi from '../../api/Chats';
import { API_PATHS, WEB_SOCKET_URL } from '../../assets/constants';
import Store from '../Store';
import { isStatusClientError, isStatusServerError } from '../../utils/api';
import { ResponseError, Token } from '../../types/api';
import WebSocketApi from '../../services/WebSocketApi';
import getUserProfile from '../../utils/middlewares/get-user-profile';
import { PingPong, TypeMessage, WebsocketEvents } from '../../types/websocket';
import { Message } from '../../types/state';
import isArray from '../../utils/myDash/isArray';
import Actions from './index';

const store: Store = new Store();
const chatsApi = new ChatsApi(API_PATHS);

export const addError = (value: string): void => {
	store.setState('activeChat.error', value);
};

export const toggleIsOpenMenuChat = (value: boolean) => {
	store.setState('activeChat.isOpenMenuChat', value);
};

export const parseToken = async (chatId: number): Promise<string | null> => {
	const response = await chatsApi.getTokenChat(chatId);

	if (isStatusClientError(response.statusCode) || isStatusServerError(response.statusCode)) {
		const message: ResponseError = response.data as ResponseError;
		const error: string = message.reason;

		await addError(error);

		return null;
	}

	const { token } = response.data as Token;

	return token;
};

export const addConnectionOpen = (value: string) => {
	store.setState('activeChat.connectionOpen', value);
};

export const addConnectionClose = (value: string) => {
	store.setState('activeChat.connectionClose', value);
};

export const startMessages = async (chatId: number) => {
	const token: string | null = await parseToken(chatId);

	await getUserProfile(true);

	const userId: number = store.getState().profile.user?.id;

	Actions.messages.setMyId(userId);

	const urlWebsocket = `${WEB_SOCKET_URL}/${userId}/${chatId}/${token}`;
	const socket = new WebSocketApi();

	socket.start(urlWebsocket);
	websocketHandler(socket);
};

export const websocketHandler = (socket: WebSocketApi) => {
	socket.on(WebsocketEvents.CONNECTION, (data: string) => {
		addConnectionOpen(data);
		addConnectionClose('');
	});

	socket.on(WebsocketEvents.CLOSE, (data: string) => {
		addConnectionClose(data);
	});

	socket.on(WebsocketEvents.MESSAGE, (data: any) => {
		const dataObject = JSON.parse(data) as PingPong | Message[];

		if (isArray(dataObject)) {
			Actions.messages.setMessages(dataObject);
		}

		if ('type' in dataObject) {
			socket.sendMessage('0', TypeMessage.GET_OLD);
		}
	});
};
