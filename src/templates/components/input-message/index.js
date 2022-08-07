import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';

class InputMessage extends Component {
  addEvents() {
    this._element.querySelector('.inputMessage__form')
      .addEventListener('submit', this._props.events.sendMessage);
  }

  render() {
    return this.compile(tpl);
  }
}

export default InputMessage;
