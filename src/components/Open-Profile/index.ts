import tpl from './tpl';
import './style.scss';
import Component from '../../services/Component';
import { Attribute } from '../../types/component';

interface OpenProfileProps extends Attribute {
	events: {
		click: (isOpen: boolean) => void
	}
}

class OpenProfileElement extends Component {
	private isOpenProfile: boolean = false;

	constructor(tag: string, props: OpenProfileProps) {
		super(tag, props);

		this.props.events.click = props.events.click.bind(this);
	}

	addEvents(): void {
		if (this.element) {
			const $openProfile: HTMLElement | null = this.element.querySelector('.openProfile__title');
			$openProfile?.addEventListener('click', () => {
				this.isOpenProfile = !this.isOpenProfile;
				this.props.events.click(this.isOpenProfile);
			});
		}
	}

	render(): Node | null {
		return this.compile(tpl, {});
	}
}

const OpenProfile: Component = new OpenProfileElement('div', {
	events: {
		click(isOpen: boolean): void {
			if (this instanceof OpenProfileElement) {
				this.props.handlerOpenProfile(isOpen);
			}
		},
	},
	attr: {
		class: 'openProfile',
	},
});

export default OpenProfile;
