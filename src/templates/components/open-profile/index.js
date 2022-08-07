import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';

class OpenProfile extends Component {
  addEvents() {
    this._element.querySelector('.openProfile__title')
      .addEventListener('click', this._props.events.click);
  }

  render() {
    return this.compile(tpl);
  }
}

export default OpenProfile;
