import tpl from './tpl';
import './style.scss';
import Component from "../../../services/Component";

// Handlebars.registerPartial('inputMessage', tpl);

class InputMessage extends Component {
	render() {
		return this.compile(tpl)
	}
}

export default InputMessage
