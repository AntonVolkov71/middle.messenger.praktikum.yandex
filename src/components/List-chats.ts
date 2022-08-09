import ListChats from '../templates/components/list-chats';
import {Props} from "../types/component";
import Component from "../services/Component";
import {Chat} from "../types/mock-data";

const listChats = (props: Props = {}, clb: { (activeChatId: string): void }): Component => new ListChats(
	'div',
	{
		...props,
		events: {
			activeChat: (e: PointerEvent, listChatsComponent: Component): void => {
				const {id}:{id: string} = e.target as HTMLElement;
				const prefix: string = '-';
				const indexPrefix: number = id.indexOf(prefix);
				const activeChatId: string = id.slice(indexPrefix + 1);

				const changeActiveChats: Chat[] = props['chats'].map((chat: Chat): Chat => {
					const tempChat: Chat = Object.assign(chat);
					tempChat.active = chat.id === +activeChatId;
					
					return tempChat;
				});

				listChatsComponent.setProps({
					chats: changeActiveChats,
				});

				clb(activeChatId);
			},
		},
		attr: {
			'class': 'listChats',
		},
	},
);

export default listChats;
