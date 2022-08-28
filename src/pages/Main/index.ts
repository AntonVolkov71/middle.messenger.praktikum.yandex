import './style.scss';
import tpl from './tpl';
import Component from '../../services/Component';
import { Attribute } from '../../types/component';
import handlerSearchChat from '../../services/handlers/handlerSearchChat';
import handlerActiveChat from '../../services/handlers/handlerActiveChat';
import ActiveChat from '../../components/Active-chat';
import OpenProfile from '../../components/Open-Profile';
import EmptyChat from '../../components/Empty-chat';
import ListMessages from '../../components/List-messages';
import { LOCALE_PATHS } from '../../assets/constants';

interface MainProps extends Attribute {
	openProfile: Component;
	searchChat?: Component;
	listChats?: Component;
	content: Component;
	handlerOpenProfile?: () => void;
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

		props.searchChat?.setProps({
			handlerSearchChat: this.handlerSearchChat,
		});

		props.listChats?.setProps({
			handlerActiveChat: this.handlerActiveChat,
		});
	}

	handlerOpenProfile = (): void => {
		const { location } = window;

		location?.pathname === LOCALE_PATHS.settings
			? location.href = LOCALE_PATHS.messenger
			: location.href = LOCALE_PATHS.settings;
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

const propsMain = {
	openProfile: OpenProfile,
	content: EmptyChat,

	attr: {
		class: 'main',
	},
};

export { propsMain, MainElement };
