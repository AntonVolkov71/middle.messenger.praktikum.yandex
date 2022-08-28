import * as Handlebars from 'handlebars';
import tpl from './tpl';
import './style.scss';
import Component from '../../services/Component';
import { Attribute } from '../../types/component';
import { connect, mapInputFileToProps } from '../../store/maps';

Handlebars.registerPartial('inputFile', tpl);

interface InputFileElementProps extends Attribute {
	titleError?: string;
	titleSuccess?: string;
	titlePutFile?: string;
	getFile: (file: File, filename: string)=> void,
	events: {
		onchange: (e: Event) => void
		close: () => void
	};
}

class InputFileElement extends Component {
	constructor(tag: string, props: InputFileElementProps) {
		super(tag, props);

		this.props.events.onchange = props.events.onchange.bind(this);
		this.props.events.close = props.events.close.bind(this);
	}

	addEvents() {
		if (this.element) {
			const $input: HTMLInputElement | null = this.element.querySelector('.input-file__input-file');
			$input?.addEventListener('change', (e) => this.props.events.onchange.call(this, e));

			const $close: HTMLElement | null = this.element.querySelector('.input-file__close');
			$close?.addEventListener('click', this.props.events.close);
		}
	}

	render() {
		return this.compile(tpl);
	}
}

const InputFileWithState = connect(mapInputFileToProps)(InputFileElement);

const InputFile: Component = new InputFileWithState(
	'div',
	{
		nameFile: 'nameFile',
		events: {
			onchange(e: Event) {
				const input: HTMLInputElement | null = e.target as HTMLInputElement;

				if ('files' in input && input.files && input.files.length) {
					const file: File | undefined = input?.files[0];
					const fileName: string | undefined = file?.name;

					if (file && fileName) {
						if (this instanceof InputFileElement) {
							this.props.getFile(file, fileName);
						}
					}
				}
			},
			close() {
				if (this instanceof InputFileElement) {
					this.props.close();
				}
			},
		},
		attr: {
			class: 'input-file',
		},
	},
);

export default InputFile;
