import './style.scss';
import Component from '../../../services/Component';
import tpl from './tpl';
import { Attribute } from '../../../types/component';
import { connect, mapChatsToProps } from '../../../store/maps';
import { Chat } from '../../../types/state';
import Actions from '../../../store/actions';

interface ListChatsProps extends Attribute {
	chats: Chat[],
	events: {
		activeChat: (e: PointerEvent) => Promise<void>
	}
}

class ListChatsElement extends Component {
	constructor(tag: string, props: ListChatsProps) {
		super(tag, props);

		this.props.events.activeChat = props.events.activeChat.bind(this);
	}

	addEvents(): void {
		if (this.element !== null) {
			this.element.querySelectorAll('.chat__over-click')
				.forEach((chat: Element) => {
					chat.addEventListener('click', this.props.events.activeChat);
				});
		}
	}

	render(): Node | null {
		return this.compile(tpl);
	}
}

const propsListChats:Omit<ListChatsProps, 'chats'> = {
	events: {
		async activeChat(e: PointerEvent): Promise<void> {
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

				await Actions.chats.getUserChat(+activeChatId);

				this.props.handlerActiveChat(+activeChatId);
			}
		},
	},
	attr: {
		class: 'listChats',
	},
};

const ListChatsWithProps = connect(mapChatsToProps)(ListChatsElement);
const ListChats: Component = new ListChatsWithProps('div', propsListChats);

export default ListChats;
