import ListMessages from '../templates/components/list-messages';
import {Props} from "../types/component";
import Component from "../services/Component";

const listMessages = (props: Props = {}): Component => new ListMessages(
	'div',
	{
		...props,
		attr: {
			'class': 'listMessages'
		}
	},
);

export default listMessages;
