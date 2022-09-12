import { State } from '@myTypes/state';
import { UserDto } from '@myTypes/api';

const initialState: State = {
	login: {
		error: '',
	},
	profile: {
		error: '',
		user: {} as UserDto,
		isShow: true,
		isChangePassword: false,
		errorInputFile: '',
	},
	auth: {
		error: '',
	},
	inputFile: {
		title: 'Выберите файл',
		successTitle: '',
		errorTitle: '',
		nameFile: '',
	},
	chats: {
		chats: [],
		error: '',
	},
	createChat: {
		error: '',
		isCreate: false,
	},
	activeChat: {
		error: '',
		connectionOpen: '',
		connectionClose: '',
		isOpenMenuChat: false,
	},
	sendMessage: {
		idSendFile: undefined,
		isOpenGetFile: false,
	},
	chatMenu: {
		error: '',
		users: [],
		chatId: null,
	},
	messages: {
		messages: [],
		idChat: 1,
		myId: null,
	},
};

export default initialState;
