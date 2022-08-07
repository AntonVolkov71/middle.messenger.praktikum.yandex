// import Handlebars from 'handlebars';
import tpl from './tpl';
import './style.scss';
import Component from "../../../services/Component";

// Handlebars.registerPartial('searchChat', tpl);
class SearchChat extends Component{
	addEvents() {
		this._element.querySelector('.searchChat__input')
			.addEventListener('input', this._props.events.input);
	}
	render() {
		return this.compile(tpl);
	}
}

export default SearchChat
