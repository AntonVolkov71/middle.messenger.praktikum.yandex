import { Attribute } from '@myTypes/component';
import * as Handlebars from 'handlebars';
import Component from '@services/Component';

import tpl from './tpl';
import './style.scss';

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
