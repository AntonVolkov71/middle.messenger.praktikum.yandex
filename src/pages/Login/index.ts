import './style.scss';
import tpl from './tpl';
import Component from '../../services/Component';
import { Attribute } from '../../types/component';
import parseFocusBlur from '../../utils/validations/parseFocusBlur';
import toggleHideElement from '../../utils/toggleHideElement';
import isValidation from '../../utils/validations/isValidation';
import { ValidationTypes } from '../../types/utils';
import { myProfile } from '../../assets/mock-data';
import { createFieldLogin, createFieldPassword } from './utils';

interface LoginProps extends Attribute {
	fieldFormLogin: Component,
	fieldFormPassword: Component,
	events: {
		linkToAuth: (e: PointerEvent) => void,
		submit: (e: SubmitEvent) => void,
		focus: (e: FocusEvent) => void,
		blur: (e: FocusEvent) => void,
	}
}

class LoginElement extends Component {
	constructor(tag: string, props: LoginProps) {
		super(tag, props);
	}

	addEvents() {
		if (this.element) {
			const $link: HTMLElement | null = this.element.querySelector('.form__link');
			$link?.addEventListener('click', this.props.events.linkToAuth);

			const $login = this.element.querySelector('.login__form');
			$login?.addEventListener('submit', this.props.events.submit);

			this.element.querySelectorAll('.form__input').forEach((input) => {
				input.addEventListener('focus', this.props.events.focus);
				input.addEventListener('blur', this.props.events.blur);
			});
		}
	}

	render(): Node | null {
		return this.compile(tpl, this.props);
	}
}

const Login: Component = new LoginElement('div', {
	fieldFormLogin: createFieldLogin(),
	fieldFormPassword: createFieldPassword(),
	events: {
		linkToAuth: (e: PointerEvent) => {
			e.preventDefault();
			e.stopPropagation();

			const { href } = e.target as HTMLLinkElement;
			window.location.href = href;
		},

		submit: (e: SubmitEvent): void => {
			e.preventDefault();

			const $form: HTMLFormElement | null = <HTMLFormElement>e.target;

			if ($form && $form instanceof HTMLElement) {
				const password: string = $form.password?.value;
				const loginValue: string = $form.login?.value;

				const isValidForm: boolean = isValidation(ValidationTypes.PASSWORD, password)
					&& isValidation(ValidationTypes.LOGIN, loginValue);

				const isEqualPassword: boolean = password === myProfile.password;
				const $errorText: HTMLElement | null = $form.querySelector('.form__error_form');

				if ($errorText) {
					toggleHideElement($errorText, isValidForm && isEqualPassword);
				}
				if (isValidForm && isEqualPassword) {
					console.info('login data', { password, login: loginValue });
				}
			}
		},

		focus: (e: FocusEvent): void => {
			parseFocusBlur(e);
		},

		blur: (e: FocusEvent): void => {
			parseFocusBlur(e);
		},

	},
	attr: {
		class: 'login popup',
	},
});

export default Login;
