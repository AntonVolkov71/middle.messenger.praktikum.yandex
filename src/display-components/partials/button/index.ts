import Component from '@services/Component';
import * as Handlebars from 'handlebars';
import tpl from './tpl';
import './style.scss';

Handlebars.registerPartial('button', tpl);

class Button extends Component {
	render() {
		return this.compile(tpl);
	}
}

export default Button;
