import SearchChat from '../templates/components/search-chat';
import { Props } from '../types/component';
import Component from '../services/Component';

const searchChat = (clb: { (searchText: string): void }, props: Props = {}): Component => new SearchChat(
	'div',
	{
		...props,
		events: {
			input: (e:InputEvent) => {
				const { value }:{value: string} = e.target as HTMLInputElement;
				clb(value);
			},
		},
		attr: {
			class: 'searchChat',
		},
	},
);

export default searchChat;
