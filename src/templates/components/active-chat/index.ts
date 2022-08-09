import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';

class ActiveChat extends Component {
	render() {
		return this.compile(tpl);
	}
}

export default ActiveChat;
