import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';
import { Attribute } from '../../../types/component';
import SendMessage from '../Send-message';
import { connect, mapActiveChatToProps } from '../../../store/maps';
import Actions from '../../../store/actions';
import ChatMenu from '../ChatMenu';
import ListMessages from '../List-messages';

interface ActiveChatProps extends Attribute {
	messages: Component;
	sendMessage: Component;
	chatMenu?: Component;
	events: {
		openMenuChat: () => void,
		closeMenuChat: () => void,
	};
}

class ActiveChatElement extends Component {
	constructor(tag: string, props: ActiveChatProps) {
		super(tag, props);

		this.props.sendMessage = props.sendMessage;
		this.props.events.closeMenuChat = props.events.closeMenuChat;
	}

	addEvents() {
		if (this.element) {
			const $openMenu = this.element.querySelector('.activeChat__open-menu');
			$openMenu?.addEventListener('click', () => this.props.events.openMenuChat());

			const $modal = this.element.querySelector('.modal__close');
			$modal?.addEventListener('click', this.props.events.closeMenuChat);
		}
	}

	render(): Node | null {
		return this.compile(tpl, this.props);
	}
}

const propsActiveChat: ActiveChatProps = {
	sendMessage: SendMessage,
	chatMenu: ChatMenu,
	messages: ListMessages,
	events: {
		openMenuChat() {
			const isOpen = true;

			Actions.activeChat.toggleIsOpenMenuChat(isOpen);
		},
		closeMenuChat() {
			const isOpen = false;

			Actions.activeChat.toggleIsOpenMenuChat(isOpen);
		},
	},
	attr: {
		class: 'activeChat',
	},
};

const ActiveChatWithProps = connect(mapActiveChatToProps)(ActiveChatElement);

const ActiveChat: Component = new ActiveChatWithProps(
	'div',
	propsActiveChat,
);

export default ActiveChat;
