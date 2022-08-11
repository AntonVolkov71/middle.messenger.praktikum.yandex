import './style.scss';
import tpl from './tpl';

import Component from '../../services/Component';
import { Attribute } from '../../types/component';

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
