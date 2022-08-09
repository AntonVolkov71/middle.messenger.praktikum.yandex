import InputMessage from '../templates/components/input-message';
import { Props } from '../types/component';
import Component from '../services/Component';

const inputMessage = (clb: { (message: string): void }, props: Props = {}): Component => new InputMessage(
	'div',
	{
		...props,
		events: {
			sendMessage: (e: SubmitEvent) => {
				e.preventDefault();
				const $form: HTMLFormElement | null = e.target as HTMLFormElement;
				if ($form && $form instanceof HTMLElement && 'message' in $form) {
					const $message: HTMLInputElement = $form.message;
					const message: string = $message.value;
					clb(message);

					$message.value = '';
				}
			},
		},
		attr: {
			class: 'inputMessage',
		},
	},
);

export default inputMessage;
