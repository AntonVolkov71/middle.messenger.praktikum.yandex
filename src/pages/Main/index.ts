import './style.scss';
import tpl from './tpl';
import Component from '../../services/Component';
import { Attribute } from '../../types/component';
import handlerOpenProfile from '../../services/handlers/handlerOpenProfile';
import handlerSearchChat from '../../services/handlers/handlerSearchChat';
import handlerActiveChat from '../../services/handlers/handlerActiveChat';
import ActiveChat from '../../components/Active-chat';
import OpenProfile from '../../components/Open-Profile';
import SearchChat from '../../components/Search-chat';
import EmptyChat from '../../components/Empty-chat';
import ListChats from '../../components/List-chats';
import ListMessages from '../../components/List-messages';

interface MainProps extends Attribute {
	openProfile: Component;
	searchChat: Component;
	listChats: Component;
	content: Component;
	handlerOpenProfile?: (isOpen: boolean) => void;
	handlerSearchChat?: (searchText: string) => void;
	handlerActiveChat?: (activeChatId: string) => void;
}

class MainElement extends Component {
	constructor(tag: string, props: MainProps) {
		super(tag, props);

		this.props.searchChat = props.searchChat;
		this.props.listChats = props.listChats;

		props.openProfile.setProps({
			handlerOpenProfile: this.handlerOpenProfile,
		});

		props.searchChat.setProps({
			handlerSearchChat: this.handlerSearchChat,
		});

		props.listChats.setProps({
			handlerActiveChat: this.handlerActiveChat,
		});
	}

	handlerOpenProfile = (isOpen: boolean): void => {
		handlerOpenProfile(this, isOpen);
	};

	handlerSearchChat = (searchText: string): void => {
		handlerSearchChat(this.props.listChats, searchText);
	};

	handlerActiveChat = (activeChatId: string) => {
		handlerActiveChat(this, ListMessages, ActiveChat, activeChatId);
	};

	render(): Node | null {
		return this.compile(tpl, {});
	}
}

const Main: Component = new MainElement('div', {
	openProfile: OpenProfile,
	searchChat: SearchChat,
	content: EmptyChat,
	listChats: ListChats,
	attr: {
		class: 'main',
	},
});

export default Main;
