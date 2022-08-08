import './style.scss';
import Component from '../../../services/Component';
import tpl from './tpl';

class Auth extends Component {
  addEvents() {
    this.element.querySelector('.form__link')
      .addEventListener('click', this.props.events.linkToLogin);

    this.element.querySelector('.auth__form')
      .addEventListener('submit', this.props.events.submit);

    this.element.querySelectorAll('.form__input').forEach((input) => {
      input.addEventListener('focus', this.props.events.focus);
      input.addEventListener('blur', this.props.events.blur);
    });
  }

  render() {
    return this.compile(tpl);
  }
}

export default Auth;
