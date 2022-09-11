import { Attribute } from '@myTypes/component';
import Component from '@services/Component';
import tpl from './tpl';
import './style.scss';

interface NotFoundElementProps extends Attribute {
	events: {
		linkToLogin: (e: PointerEvent) => void
	}
}

class NotFoundElement extends Component {
	constructor(tag: string, props: NotFoundElementProps) {
		super(tag, props);
	}

	addEvents() {
		if (this.element) {
			const $link: HTMLElement | null = this.element.querySelector('.notFound__link-back');

			$link?.addEventListener('click', this.props.events.linkToLogin);
		}
	}

	render(): Node | null {
		return this.compile(tpl);
	}
}

const NotFound: Component = new NotFoundElement(
	'div',
	{
		events: {
			linkToLogin: (e: PointerEvent): void => {
				e.preventDefault();
				e.stopPropagation();
				const { href }: { href: string } = e.target as HTMLLinkElement;

				window.location.href = href;
			},
		},
		attr: {
			class: 'notFound',
		},
	},
);

export default NotFound;
