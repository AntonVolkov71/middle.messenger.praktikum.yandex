import * as Handlebars from 'handlebars';

import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';
import { Attribute } from '../../../types/component';

Handlebars.registerPartial('fieldForm', tpl);


interface FieldFormProps extends Attribute {
	inputId?: string;
	name?: string;
	type?: string;
	value?: string;
	label?: string;
	disabled?: boolean,
	maxlength?: number;
	minlength?: number;
	textError?: string;
}

class FieldFormElement extends Component {
	constructor(tag: string, props: FieldFormProps) {
		super(tag, {
			...props,
			attr: {
				class: 'field-form',
			},
		});
	}

	render() {
		return this.compile(tpl);
	}
}

export default FieldFormElement;
