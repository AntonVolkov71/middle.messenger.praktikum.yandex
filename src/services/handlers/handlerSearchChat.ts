import ListChats from '../../display-components/components/List-chats';
import { Chat } from '../../types/state';
import Store from '../../store/Store';

const handlerSearchChat = (listChats: typeof ListChats, searchText: string): void => {
	const includesName = (chat: Chat): boolean => (chat.title)
		.toLowerCase()
		.includes(searchText.toLowerCase());

	const store = new Store();

	const { chats } = store.getState().chats;
	const findChats: Chat[] = chats.filter(includesName);

	listChats.setProps({
		chats: findChats,
	});
};

export default handlerSearchChat;
