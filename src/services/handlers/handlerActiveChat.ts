import { activeChatsOptions, urlAvatars } from '../../assets/mock-data';
import { ActiveChatsOptions, LinkUser, Message } from '../../types/mock-data';
import parseDate from '../../utils/parseDate';
import { ParseDateTypes } from '../../types/utils';
import ListMessages from '../../components/List-messages';
import ActiveChat from '../../components/Active-chat';
import Main from '../../pages/Main';

const handlerActiveChat = (
	main: typeof Main,
	listMessages: typeof ListMessages,
													 activeChat: typeof ActiveChat,
	activeChatId: string,
): void => {
	const findChatsOptions: ActiveChatsOptions | undefined = activeChatsOptions()
		.find((item) => item.id === +activeChatId);

	let linkUser: LinkUser;
	let messages: Message[] = [];

	if (findChatsOptions) {
		messages = [...findChatsOptions.messages];
		linkUser = findChatsOptions.linkUser;
	} else {
		linkUser = {
			id: 2,
			name: `Name is ${activeChatId}`,
			avatar: urlAvatars[+activeChatId] || '',
		};
	}

	listMessages.setProps({
		messages,
		myId: 1,
		dateMessage: parseDate(new Date(), ParseDateTypes.DAY_MONTH),
	});

	activeChat.setProps({
		linkUser,
		messages: listMessages,
	});

	main.setProps({
		content: activeChat,
	});
};

export default handlerActiveChat;
