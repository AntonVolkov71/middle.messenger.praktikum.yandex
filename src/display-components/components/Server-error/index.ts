import { Attribute } from '@myTypes/component';
import Component from '@services/Component';

import tpl from './tpl';
import './style.scss';

interface ServerErrorElementProps extends Attribute {
	httpStatus: number
}

class ServerErrorElement extends Component {
	constructor(tag: string, props: ServerErrorElementProps) {
		super(tag, props);
	}

	render(): Node | null {
		return this.compile(tpl, {});
	}
}

const ServerError: Component = new ServerErrorElement(
	'div',
	{
		httpStatus: 500,
		attr: {
			class: 'server-error',
		},
	},
);

export default ServerError;
