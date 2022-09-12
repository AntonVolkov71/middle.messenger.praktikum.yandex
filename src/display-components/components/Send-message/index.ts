import Component from '@services/Component';
import { Attribute } from '@myTypes/component';
import Actions from '@store/actions';
import { connect, mapSendMessageToProps } from '@store/maps';
import InputFile from '@components/Input-file';

import tpl from './tpl';
import './style.scss';

interface SendMessageProps extends Attribute {
	inputFile?: Component,
	idSendFile: number | undefined,
	events: {
		sendMessage: (e: SubmitEvent) => void
		getFile: () => void
	}
}

class SendMessageElement extends Component {
	constructor(tag: string, props: SendMessageProps) {
		super(tag, props);

		this.props.events.getFile = props.events.getFile.bind(this);
		this.props.events.sendMessage = props.events.sendMessage.bind(this);
	}

	addEvents() {
		if (this.element) {
			const $form = this.element.querySelector('.inputMessage__form');
			$form?.addEventListener('submit', this.props.events.sendMessage);

			const $getFile = this.element.querySelector('.inputMessage__input-file-icon');
			$getFile?.addEventListener('click', () => this.props.events.getFile());
		}
	}

	render(): Node | null {
		return this.compile(tpl);
	}
}

const propsSendMessage = {
	events: {
		sendMessage(e: SubmitEvent): void {
			e.preventDefault();

			const $form: HTMLFormElement | null = e.target as HTMLFormElement;

			if ($form && $form instanceof HTMLElement && 'message' in $form) {
				const $message: HTMLInputElement = $form.message;
				const message: string = $message.value;

				Actions.sendMessage.sendContent(message);

				if (this instanceof SendMessageElement) {
					this.setProps({
						idSendFile: undefined,
					});
				}

				$message.value = '';
			}
		},
		getFile(): void {
			if (this instanceof SendMessageElement) {
				const isOpen = true;
				Actions.sendMessage.toggleIsOpenGetFile(isOpen);

				Actions.inputFile.addTitle('Выберите файл для отправки');

				InputFile.setProps({
					getFile: Actions.sendMessage.sendFileToResource,
					close: () => {
						Actions.sendMessage.toggleIsOpenGetFile(!isOpen);
						Actions.inputFile.clearTitle();
					},
				});
			}
		},
	},
	inputFile: InputFile,
	attr: {
		class: 'inputMessage',
	},
};
const SendMessageWithState = connect(mapSendMessageToProps)(SendMessageElement);

const SendMessage: Component = new SendMessageWithState('div', propsSendMessage);

export default SendMessage;
