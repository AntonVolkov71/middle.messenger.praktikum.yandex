import './style.scss';
import tpl from './tpl';
import Component from '../../../services/Component';

class Login extends Component {
  addEvents() {
    this._element.querySelector('.form__link')
      .addEventListener('click', this._props.events.linkToAuth);

    this._element.querySelector('.login__form')
      .addEventListener('submit', this._props.events.submit);

    this._element.querySelectorAll('.form__input').forEach((input) => {
      input.addEventListener('focus', this._props.events.focus);
      input.addEventListener('blur', this._props.events.blur);
    });
  }

  render() {
    return this.compile(tpl);
  }
}

export default Login;
