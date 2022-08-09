import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';

class SearchChat extends Component {
  addEvents() {
    this.element.querySelector('.searchChat__input')
      .addEventListener('input', this.props.events.input);
  }

  render() {
    return this.compile(tpl);
  }
}

export default SearchChat;
