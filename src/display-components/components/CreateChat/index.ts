import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';
import { Attribute } from '../../../types/component';
import { connect, mapCreateChatsToProps } from '../../../store/maps';
import Actions from '../../../store/actions';

interface SearchChatProps extends Attribute {
	events: {
		createChat: (e: SubmitEvent) => Promise<void>;
		openCreateChat: () => Promise<void>;
	}
}

class CreateChatElement extends Component {
	constructor(tag: string, props: SearchChatProps) {
		super(tag, props);
	}

	addEvents(): void {
		if (this.element) {
			const createForm: HTMLFormElement | null = this.element.querySelector('.createChat__form');
			createForm?.addEventListener('submit', this.props.events.createChat);

			const openCreateForm: HTMLElement | null = this.element.querySelector('.createChat__open');
			openCreateForm?.addEventListener('click', this.props.events.openCreateChat);
		}
	}

	render(): Node | null {
		return this.compile(tpl, this.props);
	}
}

const propsCreateChat = {
	events: {
		async createChat(e: SubmitEvent): Promise<void> {
			e.preventDefault();
			const $form: HTMLFormElement | null = <HTMLFormElement>e.target;
			const nameChat: string = $form.create_chat?.value;

			await Actions.createChat.createChat(nameChat);
		},

		async openCreateChat(): Promise<void> {
			await Actions.createChat.openCreateChat();
		},
	},
	attr: {
		class: 'createChat',
	},
};

const CreateChatWithState = connect(mapCreateChatsToProps)(CreateChatElement);

const CreateChat: Component = new CreateChatWithState('div', propsCreateChat);

export default CreateChat;
