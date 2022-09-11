import Component from '@services/Component';
import * as Handlebars from 'handlebars';
import tpl from './tpl';
import './style.scss';

Handlebars.registerPartial('chat', tpl);

class Chat extends Component {
	render() {
		return this.compile(tpl);
	}
}

export default Chat;
