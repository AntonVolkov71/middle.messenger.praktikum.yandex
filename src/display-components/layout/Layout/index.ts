import { Attribute } from '@myTypes/component';
import Component from '@services/Component';
import tpl from './tpl';
import './style.scss';

interface LayoutProps extends Attribute {
	content?: Component,
}

class LayoutElement extends Component {
	constructor(tag: string, props: LayoutProps) {
		super(tag, props);
	}

	render() {
		return this.compile(tpl, {});
	}
}

export default LayoutElement;
