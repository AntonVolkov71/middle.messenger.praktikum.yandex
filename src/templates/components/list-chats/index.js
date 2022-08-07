import './style.scss';
import Component from '../../../services/Component';
import tpl from './tpl';

class ListChats extends Component {
  addEvents() {
    this._element.querySelectorAll('.chat__over-click').forEach((chat) => {
      chat.addEventListener('click', this._props.events.activeChat);
    });
  }

  render() {
    return this.compile(tpl);
  }
}

export default ListChats;
