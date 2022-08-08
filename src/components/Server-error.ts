import ServerError from '../templates/components/server-error';
import {Props} from "../types/component";
import Component from "../services/Component";

const serverError = (props: Props = {}): Component => new ServerError(
	'div',
	{
		...props,
		attr: {
			'class': 'server-error',
		},
	},
);

export default serverError;
