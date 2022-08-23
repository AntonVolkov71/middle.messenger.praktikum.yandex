import './style.scss';
import Component from '../../services/Component';
import tpl from './tpl';
import { Attribute } from '../../types/component';
import toggleHideElement from '../../utils/toggleHideElement';
import parseFocusBlur from '../../utils/validations/parseFocusBlur';
import isValidFormAuth from '../../utils/validations/isValidFormAuth';
import {
	createFieldEmail,
	createFieldFirstName,
	createFieldFormNameInChat,
	createFieldFormPhone,
	createFieldLogin, createFieldPassword, createFieldPasswordRepeat,
	createFieldSecondName,
} from './utils';

interface AuthElementProps extends Attribute {
	fieldFormFirstName: Component,
	fieldFormSecondName: Component,
	fieldFormLogin: Component,
	fieldFormPhone: Component,
	fieldFormNameInChat: Component,
	fieldFormPassword: Component,
	fieldFormPasswordRepeat: Component,
	fieldFormEmail: Component,
	events: {
		linkToLogin: (e: PointerEvent) => void,
		submit: (e: SubmitEvent) => void,
		focus: (e: FocusEvent) => void,
		blur: (e: FocusEvent) => void,
	}
}

class AuthElement extends Component {
	constructor(tag: string, props: AuthElementProps) {
		super(tag, props);
	}

	addEvents(): void {
		if (this.element) {
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

	render(): Node | null {
		return this.compile(tpl, {});
	}
}

const Auth: Component = new AuthElement('div', {
	fieldFormEmail: createFieldEmail(),
	fieldFormFirstName: createFieldFirstName(),
	fieldFormSecondName: createFieldSecondName(),
	fieldFormLogin: createFieldLogin(),
	fieldFormPhone: createFieldFormPhone(),
	fieldFormNameInChat: createFieldFormNameInChat(),
	fieldFormPassword: createFieldPassword(),
	fieldFormPasswordRepeat: createFieldPasswordRepeat(),
	events: {
		linkToLogin: (e: PointerEvent) => {
			e.preventDefault();
			e.stopPropagation();

			const { href }: { href: string } = e.target as HTMLLinkElement;
			window.location.href = href;
		},

		submit: (e: SubmitEvent): void => {
			e.preventDefault();

			const $form: HTMLFormElement | null = <HTMLFormElement>e.target;

			if ($form && $form instanceof HTMLElement) {
				const fields: { [key: string]: string | undefined } = {
					password: $form.password?.value,
					passwordRepeat: $form.password_repeat?.value,
					login: $form.login?.value,
					phone: $form.phone?.value,
					email: $form.email?.value,
					firstName: $form.first_name?.value,
					secondName: $form.second_name?.value,
				};

				const isValidAllFields: boolean = isValidFormAuth(fields);
				const $errorText: HTMLElement | null = $form.querySelector('.form__error_form');

				if ($errorText) {
					toggleHideElement($errorText, isValidAllFields);
				}

				if (isValidAllFields) {
					console.info('auth data', fields);
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
		class: 'auth popup',
	},
});

export default Auth;
