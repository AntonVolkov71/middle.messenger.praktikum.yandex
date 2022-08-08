import './style.scss';
import Component from '../../../services/Component';
import tpl from './tpl';

class ListChats extends Component {
  addEvents() {
    this._element.querySelectorAll('.chat__over-click').forEach((chat) => {
      chat.addEventListener('click', (e) => {
        this._props.events.activeChat(e, this);
      });
    });
  }

  render() {
    return this.compile(tpl);
  }
}

export default ListChats;
