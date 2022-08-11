import tpl from './tpl';
import './style.scss';
import Component from '../../services/Component';
import { Attribute } from '../../types/component';
import { Message } from '../../types/mock-data';

interface ListMessagesProps extends Attribute {
	messages?: Message[];
	myId?: number;
	dateMessage?: string;
}

class ListMessagesElement extends Component {
	constructor(tag: string, props: ListMessagesProps) {
		super(tag, props);
	}

	render(): Node | null {
		return this.compile(tpl);
	}
}

const ListMessages: Component = new ListMessagesElement(
	'div',
	{
		attr: {
			class: 'listMessages',
		},
	},
);

export default ListMessages;
