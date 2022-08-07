import ListChats from "../templates/components/list-chats";
import {activeChatsOptions, urlAvatars} from "../assets/mock-data";
import parseDate from "../utils/parseDate";

const listChats = (props, elements) => {
	return new ListChats(
		'div',
		{
			...props,
			events: {
				activeChat: (e) => {
					const mainComponent = elements.getMain();
					const listChatsComponent = elements.getListChats();
					const listMessagesComponent = elements.getListMessages();
					const activeChatComponent = elements.getActiveChat();
					const inputMessageComponent = elements.getInputMessage();

					const {id} = e.target;
					const prefix = '-';
					const indexPrefix = id.indexOf(prefix);
					const activeChatId = id.slice(indexPrefix + 1);

					const findChatsOptions = activeChatsOptions()
						.find((item) => item.id === +activeChatId);

					const changeActiveChats = props.chats.map((chat) => {
						const tempChat = Object.assign(chat);
						tempChat.active = chat.id === +activeChatId;
						return tempChat;
					});

					if (findChatsOptions) {
						listMessagesComponent.setProps({
							messages: findChatsOptions.messages,
							myId: 1,
							dateMessage: parseDate(new Date(), 'dayMonth'),
						})

						activeChatComponent.setProps({
							linkUser: findChatsOptions.linkUser,
							messages: listMessagesComponent,
							inputMessage: inputMessageComponent,
						})

						mainComponent.setProps({
							content: activeChatComponent
						})

					} else {

						listMessagesComponent.setProps({
							messages: [],
							dateMessage: parseDate(new Date(), 'dayMonth'),
						})

						activeChatComponent.setProps({
							linkUser: {
								id: 2,
								name: `Name is ${activeChatId}`,
								avatar: urlAvatars[activeChatId]
							},
							messages: listMessagesComponent,
							inputMessage: inputMessageComponent,
						})

						mainComponent.setProps({
							content: activeChatComponent
						})
					}

					listChatsComponent.setProps({
						chats: changeActiveChats,
					})
				}
			}, attr: {
				'class': 'listChats'
			}
		})
	// }
}

export default listChats
