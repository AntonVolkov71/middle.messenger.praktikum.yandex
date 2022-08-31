import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';
import { Attribute } from '../../../types/component';

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
