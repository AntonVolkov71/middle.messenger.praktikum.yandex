import './style.scss';
import tpl from './tpl';

import Component from '../../../services/Component';
import { Props } from '../../../types/component';

class Layout extends Component {
	constructor(props: Props) {
		super('div', props);
	}

	componentDidUpdate(oldProps: Props, newProps: Props): boolean {
		return JSON.stringify(oldProps) !== JSON.stringify(newProps);
	}

	render() {
		return this.compile(tpl, {});
	}
}

export default Layout;
