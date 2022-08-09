import './style.scss';
import Component from '../../../services/Component';
import tpl from './tpl';

class Auth extends Component {
	addEvents() {
		if (this.element !== null) {
			const $link: HTMLElement | null = this.element.querySelector('.form__link');
			$link?.addEventListener('click', this.props.events.linkToLogin);

			const $form: HTMLFormElement | null = this.element.querySelector('.auth__form');
			$form?.addEventListener('submit', this.props.events.submit);

			this.element.querySelectorAll('.form__input').forEach((input: Element) => {
				input.addEventListener('focus', this.props.events.focus);
				input.addEventListener('blur', this.props.events.blur);
			});
		}
	}

	render() {
		return this.compile(tpl, {});
	}
}

export default Auth;
