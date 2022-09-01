import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';
import { Attribute } from '../../../types/component';
import { connect, mapChatMenuToProps } from '../../../store/maps';
import { API_PATHS_RESOURCE } from '../../../assets/constants';
import Actions from '../../../store/actions';

interface ChatMenuProps extends Attribute {
	apiResource: string,
	error?: string,
	events: {
		addUser: (e: SubmitEvent) => Promise<void>,
		closeError: () => void,
		deleteUser: (e: FocusEvent) => Promise<void>
	}
}

class ChatMenuElement extends Component {
	constructor(tag: string, props: ChatMenuProps) {
		super(tag, props);
	}

	addEvents(): void {
		if (this.element) {
			const $addUserForm: HTMLFormElement | null = this.element.querySelector('.chat-menu__add-user');
			$addUserForm?.addEventListener('submit', this.props.events.addUser);

			const $closeError: HTMLElement | null = this.element.querySelector('.chat-menu__wrapper-error');
			$closeError?.addEventListener('click', () => this.props.events.closeError());

			const $deleteUser: HTMLElement | null = this.element.querySelector('.chat-menu__button_delete');
			$deleteUser?.addEventListener('click', this.props.events.deleteUser);
		}
	}

	render(): Node | null {
		return this.compile(tpl, this.props);
	}
}

const propsChatMenu: ChatMenuProps = {
	events: {
		async addUser(e: SubmitEvent): Promise<void> {
			e.preventDefault();

			const $form: HTMLFormElement | null = <HTMLFormElement>e.target;

			if ($form && $form instanceof HTMLElement) {
				const userValue: string = $form['chat-menu-add'].value;
				await Actions.chatMenu.addUsers(userValue);
			}
		},
		closeError() {
			Actions.chatMenu.addError('');
		},
		async deleteUser(e: FocusEvent) {
			const button: HTMLButtonElement | null = e.target as HTMLButtonElement;
			await Actions.chatMenu.deleteUser(button.id);
		},
	},
	apiResource: API_PATHS_RESOURCE,
	attr: {
		class: 'chat-menu',
	},
};

const ChatMenuWithState = connect(mapChatMenuToProps)(ChatMenuElement);

const ChatMenu: Component = new ChatMenuWithState('div', propsChatMenu);

export default ChatMenu;
