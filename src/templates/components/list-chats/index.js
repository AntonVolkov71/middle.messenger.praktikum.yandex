import './style.scss';
import Component from '../../../services/Component';
import tpl from './tpl';

class ListChats extends Component {
  addEvents() {
    this.element.querySelectorAll('.chat__over-click').forEach((chat) => {
      chat.addEventListener('click', (e) => {
        this.props.events.activeChat(e, this);
      });
    });
  }

  render() {
    return this.compile(tpl);
  }
}

export default ListChats;
