import './style.scss';
import Component from '../../services/Component';
import tpl from './tpl';
import { Attribute } from '../../types/component';
import parseFocusBlur from '../../utils/validations/parseFocusBlur';
import isValidFormAuth from '../../utils/validations/isValidFormAuth';
import { LOCALE_PATHS } from '../../assets/constants';
import { connect, mapAuthToProps } from '../../store/maps';
import Actions from '../../store/actions';
import { PasswordRepeat, SignupDto } from '../../types/api';

interface AuthProps extends Attribute {
	events: {
		linkToLogin: (e: PointerEvent) => void,
		submit: (e: SubmitEvent) => void,
		focus: (e: FocusEvent) => void,
		blur: (e: FocusEvent) => void,
	},
	label: string,
	linkMain: string
}

class AuthElement extends Component {
	constructor(tag: string, props: AuthProps) {
		super(tag, props);
	}

	addEvents(): void {
		if (this.element) {
			const $link: HTMLElement | null = this.element.querySelector('.form__link');
			$link?.addEventListener('click', this.props.events.linkToLogin);

			const $form: HTMLFormElement | null = this.element.querySelector('.auth__form');
			$form?.addEventListener('submit', this.props.events.submit);

			this.element.querySelectorAll('.form__input')
				.forEach((input: Element) => {
					input.addEventListener('focus', this.props.events.focus);
					input.addEventListener('blur', this.props.events.blur);
				});
		}
	}

	render(): Node | null {
		return this.compile(tpl, this.props);
	}
}

const propsAuth: AuthProps = {
	events: {
		linkToLogin: (e: PointerEvent) => {
			e.preventDefault();
			e.stopPropagation();

			const { href }: { href: string } = e.target as HTMLLinkElement;
			window.location.href = href;
		},

		submit: async (e: SubmitEvent): Promise<void> => {
			e.preventDefault();

			const $form: HTMLFormElement | null = <HTMLFormElement>e.target;

			if ($form && $form instanceof HTMLElement) {
				const signup: SignupDto = {
					first_name: $form.first_name?.value,
					second_name: $form.second_name?.value,
					display_name: $form.display_name?.value,
					login: $form.login?.value,
					email: $form.email?.value,
					phone: $form.phone?.value,
					password: $form.password?.value,
				};

				const passwordRepeat: PasswordRepeat = {
					password_repeat: $form.password_repeat?.value,
				};
				const isValidAllFields: boolean = isValidFormAuth({
					...signup,
					...passwordRepeat,
				});

				if (isValidAllFields) {
					await Actions.authApi.signupAction(signup);
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
	label: 'Регистрация',
	linkMain: LOCALE_PATHS.main,
	attr: {
		class: 'authApi popup',
	},
};

const AuthWithState = connect(mapAuthToProps)(AuthElement);

const Auth: Component = new AuthWithState('div', propsAuth);

export default Auth;
