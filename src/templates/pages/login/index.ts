import './style.scss';
import tpl from './tpl';
import Component from '../../../services/Component';

class Login extends Component {
	addEvents() {
		if (this.element !== null) {
			const $link: HTMLElement | null = this.element.querySelector('.form__link')

			$link?.addEventListener('click', this.props.events.linkToAuth);
			
			const $login = this.element?.querySelector('.login__form')
			$login?.addEventListener('submit', this.props.events.submit);

			this.element.querySelectorAll('.form__input').forEach((input) => {
			  input.addEventListener('focus', this.props.events.focus);
			  input.addEventListener('blur', this.props.events.blur);
			});
		}
	}

	render() {
		return this.compile(tpl, {});
	}
}

export default Login;
