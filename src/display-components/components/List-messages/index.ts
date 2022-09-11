import Component from '@services/Component';
import { Attribute } from '@myTypes/component';
import { connect, mapMessagesToProps } from '@store/maps';
import tpl from './tpl';
import './style.scss';

interface ListMessagesProps extends Attribute {
	myId?: number;
	idChat?: number;
}

class ListMessagesElement extends Component {
	constructor(tag: string, props: ListMessagesProps) {
		super(tag, props);
	}

	render(): Node | null {
		return this.compile(tpl);
	}
}

const ListMessagesElementWithProps = connect(mapMessagesToProps)(ListMessagesElement);
const ListMessages: Component = new ListMessagesElementWithProps(
	'div',
	{
		attr: {
			class: 'listMessages',
		},
	},
);

export default ListMessages;
