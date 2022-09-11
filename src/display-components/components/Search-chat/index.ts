import { Attribute } from '@myTypes/component';
import Component from '@services/Component';
import tpl from './tpl';
import './style.scss';

interface SearchChatProps extends Attribute {
	events: {
		input: (e: InputEvent) => void
	}
}

class SearchChatElement extends Component {
	constructor(tag: string, props: SearchChatProps) {
		super(tag, props);

		this.props.events.input = props.events.input.bind(this);
	}

	addEvents(): void {
		if (this.element) {
			const $searchChat: HTMLElement | null = this.element.querySelector('.searchChat__input');
			$searchChat?.addEventListener('input', this.props.events.input);
		}
	}

	render(): Node | null {
		return this.compile(tpl);
	}
}

const SearchChat: Component = new SearchChatElement('div', {
	events: {
		input(e: InputEvent): void {
			if (this instanceof SearchChatElement) {
				const { value }: { value: string } = e.target as HTMLInputElement;
				this.props.handlerSearchChat(value);
			}
		},
	},
	attr: {
		class: 'searchChat',
	},
});

export default SearchChat;
