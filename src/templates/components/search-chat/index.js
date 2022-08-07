import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';

class SearchChat extends Component {
  addEvents() {
    this._element.querySelector('.searchChat__input')
      .addEventListener('input', this._props.events.input);
  }

  render() {
    return this.compile(tpl);
  }
}

export default SearchChat;
