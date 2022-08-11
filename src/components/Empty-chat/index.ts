import * as Handlebars from 'handlebars';
import tpl from './tpl';
import './style.scss';
import Component from '../../services/Component';
import { Attribute } from '../../types/component';

Handlebars.registerPartial('emptyChat', tpl);

interface EmptyChatsProps extends Attribute {
}

class EmptyChatsElement extends Component {
	constructor(tag: string, props: EmptyChatsProps) {
		super(tag, props);
	}

	render(): Node | null {
		return this.compile(tpl);
	}
}

const EmptyChat: Component = new EmptyChatsElement('div', {
	attr: {
		class: 'emptyChat',
	},
});

export default EmptyChat;
