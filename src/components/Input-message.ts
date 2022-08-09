import InputMessage from '../templates/components/input-message';
import {Props} from "../types/component";
import Component from "../services/Component";

const inputMessage = (props: Props = {}, clb: { (message: string): void }): Component => new InputMessage(
	'div',
	{
		...props,
		events: {
			sendMessage: (e: SubmitEvent) => {
				e.preventDefault();
				const $form: EventTarget | null = e.target;
				if ($form && $form instanceof HTMLElement && 'message' in $form) {
					const $message: HTMLInputElement = $form['message'];
					const message: string = $message.value;
					clb(message);

					$message.value = '';
				}
			},
		},
		attr: {
			'class': 'inputMessage',
		},
	},
);

export default inputMessage;
