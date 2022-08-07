import './style.scss';
import Component from "../../../services/Component";
import tpl from "./tpl";

class NotFound extends Component {
	addEvents() {
		this._element.querySelector('.notFound__link-back')
			.addEventListener('click', this._props.events.linkToLogin);
	}
	
	render() {
		return this.compile(tpl)
	}
}

export default NotFound
