import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';

class ListMessages extends Component {
	render() {
		return this.compile(tpl);
	}
}

export default ListMessages;
