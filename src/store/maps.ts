import {
	AuthState, ChatMenuState,
	ChatState,
	CreateChatState,
	InputFileState,
	LoginState,
	ActiveChatState,
	ProfileState,
	SendMessageState,
	State,
	StoreEvents, MessagesState,
} from '../types/state';
import Component from '../services/Component';
import { Props } from '../types/component';
import Store from './Store';
import isEqual from '../utils/myDash/isEqual';

export const connect = (mapStateToProps: (state: State) => any) => function block(Block: typeof Component) {
	return class extends Block {
		constructor(tag: string, props: Props) {
			const store = new Store();
			let state = mapStateToProps(store.getState());
			super(tag, { ...props, ...state });

			store.on(StoreEvents.UPDATED, () => {
				const newState = mapStateToProps(store.getState());

				if (!isEqual(state, newState)) {
					this.setProps({ ...newState });
				}

				state = newState;
			});
		}
	};
};

export const mapLoginToProps = (state: State): LoginState => ({
	error: state.login?.error,
});

export const mapAuthToProps = (state: State): AuthState => ({
	error: state.auth?.error,
});

export const mapProfileToProps = (state: State): ProfileState => ({
	error: state.profile?.error,
	user: {
		id: state.profile?.user?.id,
		login: state.profile?.user?.login,
		avatar: state.profile?.user?.avatar,
		email: state.profile?.user?.email,
		display_name: state.profile?.user?.display_name,
		first_name: state.profile?.user?.first_name,
		second_name: state.profile?.user?.second_name,
		phone: state.profile?.user?.phone,
	},
	isShow: state.profile?.isShow,
	isChangePassword: state.profile?.isChangePassword,
	errorInputFile: state.profile?.errorInputFile,
});

export const mapInputFileToProps = (state: State): InputFileState => ({
	successTitle: state.inputFile?.successTitle,
	errorTitle: state.inputFile?.errorTitle,
	title: state.inputFile?.title,
	nameFile: state.inputFile?.nameFile,
});

export const mapChatsToProps = (state: State): ChatState => ({
	chats: state.chats?.chats,
	error: state.chats?.error,
});

export const mapCreateChatsToProps = (state: State): CreateChatState => ({
	isCreate: state.createChat?.isCreate,
	error: state.createChat?.error,
});

export const mapActiveChatToProps = (state: State): ActiveChatState => ({
	error: state.activeChat?.error,
	connectionOpen: state.activeChat?.connectionOpen,
	connectionClose: state.activeChat?.connectionClose,
	isOpenMenuChat: state.activeChat?.isOpenMenuChat,
});

export const mapSendMessageToProps = (state: State): SendMessageState => ({
	idSendFile: state.sendMessage?.idSendFile,
	isOpenGetFile: state.sendMessage?.isOpenGetFile,
});

export const mapChatMenuToProps = (state: State): ChatMenuState => ({
	error: state.chatMenu?.error,
	users: state.chatMenu?.users,
	chatId: state.chatMenu?.chatId,
});

export const mapMessagesToProps = (state: State): MessagesState => ({
	messages: state.messages?.messages,
	idChat: state.messages?.idChat,
	myId: state.messages?.myId,
});
