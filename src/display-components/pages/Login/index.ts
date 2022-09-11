import './style.scss';
import parseFocusBlur from '@utils/validations/parseFocusBlur';
import isValidation from '@utils/validations/isValidation';
import { LOCALE_PATHS } from '@assets/constants';
import { Attribute } from '@myTypes/component';
import { ValidationTypes } from '@myTypes/utils';
import Component from '@services/Component';
import Actions from '@store/actions';
import { connect, mapLoginToProps } from '@store/maps';
import tpl from './tpl';

interface LoginProps extends Attribute {
	events: {
		linkToAuth: (e: PointerEvent) => void,
		submit: (e: SubmitEvent) => void,
		focus: (e: FocusEvent) => void,
		blur: (e: FocusEvent) => void,
	},
	linkSignUp: string,
	label: string
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

			this.element.querySelectorAll('.form__input')
				.forEach((input) => {
					input.addEventListener('focus', this.props.events.focus);
					input.addEventListener('blur', this.props.events.blur);
				});
		}
	}

	render(): Node | null {
		return this.compile(tpl, this.props);
	}
}

const props = {
	events: {
		linkToAuth: (e: PointerEvent) => {
			e.preventDefault();
			e.stopPropagation();

			const { href } = e.target as HTMLLinkElement;
			window.location.href = href;
		},

		submit: async (e: SubmitEvent): Promise<void> => {
			e.preventDefault();

			const $form: HTMLFormElement | null = <HTMLFormElement>e.target;

			if ($form && $form instanceof HTMLElement) {
				const password: string = $form.password?.value;
				const loginValue: string = $form.login?.value;

				const isValidForm: boolean = isValidation(ValidationTypes.PASSWORD, password)
					&& isValidation(ValidationTypes.LOGIN, loginValue);

				if (isValidForm) {
					await Actions.authApi.signinAction(loginValue, password);
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
	label: 'Вход',
	linkSignUp: LOCALE_PATHS.signUp,
	attr: {
		class: 'login popup',
	},
};

const LoginWithState = connect(mapLoginToProps)(LoginElement);

const Login: Component = new LoginWithState('div', props);

export default Login;
