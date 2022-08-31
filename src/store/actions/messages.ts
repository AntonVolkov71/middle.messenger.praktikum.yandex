import { Message } from '../../types/state';
import Store from '../Store';

const store = new Store();

export const setMessages = (messages: Message[]) => {
	store.setState('messages.messages', messages);
};

export const setMyId = (myId: number) => {
	store.setState('messages.myId', myId);
};
