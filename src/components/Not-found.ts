import NotFound from '../templates/components/not-found';
import {Props} from "../types/component";
import Component from "../services/Component";

const notFound = (props: Props = {}): Component => new NotFound(
	'div',
	{
		...props,
		events: {
			linkToLogin: (e: PointerEvent) => {
				e.preventDefault();
				e.stopPropagation();
				const {href}:{href: string} = e.target as HTMLLinkElement;
				window.location.href = href;
			},
		},
		attr: {
			'class': 'notFound',
		},
	},
);

export default notFound;
