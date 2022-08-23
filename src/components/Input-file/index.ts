import * as Handlebars from 'handlebars';
import tpl from './tpl';
import './style.scss';
import Component from '../../services/Component';
import { Attribute } from '../../types/component';

Handlebars.registerPartial('inputFile', tpl);

interface InputFileElementProps extends Attribute {
	titleError?: string;
	titleSuccess?: string;
	titlePutFile?: string;
}

class InputFileElement extends Component {
	constructor(tag: string, props: InputFileElementProps) {
		super(tag, props);
	}

	render() {
		return this.compile(tpl);
	}
}

const InputFile: Component = new InputFileElement(
	'div',
	{
		titlePutFile: 'Для смены вашей аватарки необходимо выбрать изображение',
		attr: {
			class: 'input-file',
		},
	},
);

export default InputFile;
