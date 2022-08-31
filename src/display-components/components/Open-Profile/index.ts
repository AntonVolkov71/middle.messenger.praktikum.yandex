import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';
import { Attribute } from '../../../types/component';

interface OpenProfileProps extends Attribute {
	events: {
		click: () => void
	}
}

class OpenProfileElement extends Component {
	constructor(tag: string, props: OpenProfileProps) {
		super(tag, props);

		this.props.events.click = props.events.click.bind(this);
	}

	addEvents(): void {
		if (this.element) {
			const $openProfile: HTMLElement | null = this.element.querySelector('.openProfile__title');
			$openProfile?.addEventListener('click', () => {
				this.props.events.click();
			});
		}
	}

	render(): Node | null {
		return this.compile(tpl, {});
	}
}

const OpenProfile: Component = new OpenProfileElement('div', {
	events: {
		click(): void {
			if (this instanceof OpenProfileElement) {
				this.props.handlerOpenProfile();
			}
		},
	},
	attr: {
		class: 'openProfile',
	},
});

export default OpenProfile;
