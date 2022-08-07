import './style.scss';
import Component from '../../../services/Component';
import tpl from './tpl';

class Auth extends Component {
  addEvents() {
    this._element.querySelector('.form__link')
      .addEventListener('click', this._props.events.linkToLogin);

    this._element.querySelector('.auth__form')
      .addEventListener('submit', this._props.events.submit);

    this._element.querySelectorAll('.form__input').forEach((input) => {
      input.addEventListener('focus', this._props.events.focus);
      input.addEventListener('blur', this._props.events.blur);
    });
  }

  render() {
		console.log('Auth render',);
    return this.compile(tpl);
  }
}

export default Auth;
