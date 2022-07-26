import { isStatusClientError, isStatusServerError } from '@utils/api';
import { API_PATHS } from '@assets/constants';
import { Resource, ResponseError } from '@myTypes/api';
import { TypeMessage } from '@myTypes/websocket';
import WebSocketApi from '@services/WebSocketApi';
import Store from '@store/Store';
import ResourceApi from '@api/ResourceApi';
import Actions from './index';

const store: Store = new Store();
const resourceApi = new ResourceApi(API_PATHS);

export const toggleIsOpenGetFile = (value: boolean) => {
	store.setState('sendMessage.isOpenGetFile', value);
};

export const setIdSendFile = (value: number | undefined) => {
	store.setState('sendMessage.idSendFile', value);
};

export const sendMessageToChat = (content: string, type: TypeMessage) => {
	const socket = new WebSocketApi();
	socket.sendMessage(content, type);
};

export const sendContent = (content: string) => {
	const { idSendFile } = store.getState().sendMessage;
	if (idSendFile) {
		sendMessageToChat(idSendFile.toString(), TypeMessage.FILE);
	}

	sendMessageToChat(content, TypeMessage.MESSAGE);
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
