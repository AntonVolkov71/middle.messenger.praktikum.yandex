import * as Handlebars from 'handlebars';
import Component from '@services/Component';
import { Attribute } from '@myTypes/component';
import tpl from './tpl';
import './style.scss';

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
