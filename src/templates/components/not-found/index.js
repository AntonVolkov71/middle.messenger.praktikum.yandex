import './style.scss';
import Component from '../../../services/Component';
import tpl from './tpl';

class NotFound extends Component {
  addEvents() {
    this.element.querySelector('.notFound__link-back')
      .addEventListener('click', this.props.events.linkToLogin);
  }

  render() {
    return this.compile(tpl);
  }
}

export default NotFound;
