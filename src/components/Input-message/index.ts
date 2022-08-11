import tpl from './tpl';
import './style.scss';
import Component from '../../services/Component';
import { Attribute } from '../../types/component';

interface InputMessageProps extends Attribute {
	events: {
		submit: (e: SubmitEvent) => void
	}
}

class InputMessageElement extends Component {
	constructor(tag: string, props: InputMessageProps) {
		super(tag, props);

		this.props.events.submit = props.events.submit.bind(this);
	}

	render(): Node | null {
		return this.compile(tpl);
	}
}

const InputMessage: Component = new InputMessageElement('div', {
	events: {
		submit(e: SubmitEvent): void {
			e.preventDefault();

			if (this instanceof InputMessageElement) {
				const $form: HTMLFormElement | null = e.target as HTMLFormElement;

				if ($form && $form instanceof HTMLElement && 'message' in $form) {
					const $message: HTMLInputElement = $form.message;
					const message: string = $message.value;

					this.props.handlerInputMessage(message);
					$message.value = '';
				}
			}
		},
	},
	attr: {
		class: 'inputMessage',
	},
});

export default InputMessage;
