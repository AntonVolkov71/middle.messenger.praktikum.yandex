import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';

class InputMessage extends Component {
  addEvents() {
    this.element.querySelector('.inputMessage__form')
      .addEventListener('submit', this.props.events.sendMessage);
  }

  render() {
    return this.compile(tpl);
  }
}

export default InputMessage;
