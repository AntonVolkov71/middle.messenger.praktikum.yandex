import { Chat } from '../../types/mock-data';
import { chats } from '../../assets/mock-data';
import ListChats from '../../components/List-chats';

const handlerSearchChat = (listChats: typeof ListChats, searchText: string): void => {
	const includesName = (chat: Chat): boolean => (chat.name).toLowerCase().includes(searchText.toLowerCase());
	const findChats: Chat[] = chats.filter(includesName);

	listChats.setProps({
		chats: findChats,
	});
};

export default handlerSearchChat;
