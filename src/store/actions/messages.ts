import { Message } from '@myTypes/state';
import Store from '@store/Store';

const store = new Store();

export const setMessages = (messages: Message[]) => {
	store.setState('messages.messages', messages);
};

export const setMyId = (myId: number) => {
	store.setState('messages.myId', myId);
};
