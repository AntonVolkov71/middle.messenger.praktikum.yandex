import tpl from './tpl';
import './style.scss';
import Component from '../../services/Component';
import {Attribute} from '../../types/component';
import {LinkUser} from '../../types/mock-data';
import InputMessage from '../Input-message';

interface ActiveChatProps extends Attribute {
	linkUser?: LinkUser;
	messages?: Component;
	inputMessage: Component;
}

class ActiveChatElement extends Component {
	constructor(tag: string, props: ActiveChatProps) {
		super(tag, props);

		this.props.inputMessage = props.inputMessage;

		props.inputMessage.setProps({
			handlerInputMessage: this.handlerInputMessage,
		});
	}

	handlerInputMessage = (message: string): void => {
		console.info('message', message);
	};

	render(): Node | null {
		return this.compile(tpl);
	}
}

const ActiveChat: Component = new ActiveChatElement(
	'div',
	{
		inputMessage: InputMessage,
		attr: {
			class: 'activeChat',
		},
	},
);

export default ActiveChat;
