import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';

class ServerError extends Component {
	render() {
		return this.compile(tpl, {});
	}
}

export default ServerError;
