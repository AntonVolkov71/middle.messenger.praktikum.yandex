import Store from '../Store';
import { isStatusClientError, isStatusServerError } from '../../utils/api';
import { Resource, ResponseError } from '../../types/api';
import Actions from './index';
import { API_PATHS } from '../../assets/constants';
import ResourceApi from '../../api/ResourceApi';
import WebSocketApi from '../../services/WebSocketApi';
import { TypeMessage } from '../../types/websocket';

const store: Store = new Store();
const resourceApi = new ResourceApi(API_PATHS);

export const toggleIsOpenGetFile = (value: boolean) => {
	store.setState('sendMessage.isOpenGetFile', value);
};

export const setIdSendFile = (value: number | undefined) => {
	store.setState('sendMessage.idSendFile', value);
};

export const sendFileToChat = (content: number) => {
	// const url = 'wss://ya-praktikum.tech/ws/chats/96671/1001/176f0c41ee2305a06bbd211908b270d808f47a3d:1661882449'
	const socket = new WebSocketApi();

	socket.sendMessage(content.toString(), TypeMessage.FILE);
};

export const sendMessageToChat = (content: string) => {
	const socket = new WebSocketApi();
	socket.sendMessage(content, TypeMessage.MESSAGE);
};

export const sendContent = (content: string) => {
	const { idSendFile } = store.getState().sendMessage;
	if (idSendFile) {
		sendFileToChat(idSendFile);
	}

	sendMessageToChat(content);
};

export const sendFileToResource = async (file: File, fileName: string) => {
	const response = await resourceApi.sendFileToResource(file);

	const isClientError = isStatusClientError(response.statusCode);
	const isServerError = isStatusServerError(response.statusCode);

	if (isClientError || isServerError) {
		let error: string = '';

		if (isClientError) {
			const message: ResponseError = response.data as ResponseError;
			error = message.reason;
		}

		if (isServerError) {
			error = response.data as string;
		}

		Actions.inputFile.addErrorTitle(error);
	} else {
		Actions.inputFile.addSuccessTitle('Вы справились мой друг, файл загружен');
		Actions.inputFile.addNameFile(fileName);

		const { id } = response.data as Resource;
		setIdSendFile(id);
	}
};
