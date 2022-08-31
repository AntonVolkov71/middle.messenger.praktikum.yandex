import * as Handlebars from 'handlebars';
import { Message } from '../../types/state';
import { API_PATHS_RESOURCE } from '../../assets/constants';
import parseDate from '../parseDate';
import Store from '../../store/Store';
import { UserDto } from '../../types/api';

const store: Store = new Store();

function renderMessage(this: any, message: Message) {
	const {
		file, content, time, user_id,
	} = message;
	const { users } = store.getState().chatMenu;
	const findUser = users.find((user:UserDto) => user.id === +user_id);

	let result: string = '';
	let login: string = '';

	if (findUser) {
		login = findUser.login;
	}

	console.log('login', login);

	if (file) {
		const src = `${API_PATHS_RESOURCE}${file.path}`;
		if (file.content_type === 'image/jpeg') {
			result = `<img src="${src}" class="message__image" alt="simple image">`;
		}
	} else {
		result = `<p class="message__text">${content}</p>`;
	}

	if (result) {
		const newDate = new Date(time);
		const date = parseDate(newDate);

		const resultMessage: string = `
			${result}
			<div class="message__description">
					<p class="message__login">${login}</p>
					<time class="message__time">${date}</time>
			</div>`;

		return new Handlebars.SafeString(resultMessage);
	}

	return null;
}

export default renderMessage;
