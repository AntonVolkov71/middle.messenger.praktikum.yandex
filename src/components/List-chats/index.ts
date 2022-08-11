import './style.scss';
import Component from '../../services/Component';
import tpl from './tpl';
import { Attribute } from '../../types/component';
import { Chat } from '../../types/mock-data';
import { chats } from '../../assets/mock-data';

interface ListChatsProps extends Attribute {
	chats: Chat[],
	events: {
		activeChat: (e: PointerEvent) => void
	}
}

class ListChatsElement extends Component {
	constructor(tag: string, props: ListChatsProps) {
		super(tag, props);

		this.props.events.activeChat = props.events.activeChat.bind(this);
	}

	addEvents(): void {
		if (this.element !== null) {
			this.element.querySelectorAll('.chat__over-click').forEach((chat: Element) => {
				chat.addEventListener('click', this.props.events.activeChat);
			});
		}
	}

	render(): Node | null {
		return this.compile(tpl);
	}
}

const ListChats: Component = new ListChatsElement('div', {
	chats,
	events: {
		activeChat(e: PointerEvent): void {
			const { id }: { id: string } = e.target as HTMLElement;
			const prefix: string = '-';
			const indexPrefix: number = id.indexOf(prefix);
			const activeChatId: string = id.slice(indexPrefix + 1);

			if (this instanceof ListChatsElement) {
				const changeActiveChats: Chat[] = this.props.chats.map((chat: Chat): Chat => {
					const tempChat: Chat = Object.assign(chat);
					tempChat.active = chat.id === +activeChatId;

					return tempChat;
				});

				this.setProps({
					chats: changeActiveChats,
				});

				this.props.handlerActiveChat(activeChatId);
			}
		},
	},
	attr: {
		class: 'listChats',
	},
});

export default ListChats;
