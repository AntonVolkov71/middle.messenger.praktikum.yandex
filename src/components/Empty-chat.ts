import EmptyChats from '../templates/partials/empty-chats';
import { Props } from '../types/component';
import Component from '../services/Component';

const emptyChat = (props: Props = {}): Component => new EmptyChats(
	'div',
	{
		...props,
		attr: {
			class: 'emptyChat',
		},
	},
);

export default emptyChat;
