import * as Handlebars from 'handlebars';

import '@assets/styles/style.scss';

import '@partials/button';
import '@partials/chat';
import '@partials/input';
import '@partials/message';
import '@partials/modal';
import '@partials/formFields/field';
import '@partials/formFields/email';
import '@partials/formFields/first-name';
import '@partials/formFields/second-name';
import '@partials/formFields/login';
import '@partials/formFields/display-name';
import '@partials/formFields/phone';
import '@partials/formFields/password';
import '@partials/formFields/password-repeat';
import '@partials/formFields/password-old';
import '@components/Empty-chat';

import processingRouting from '@utils/processingRouting';
import { getChats } from '@utils/middlewares/get-chats';
import ifEqualsId from '@utils/helpers/ifEqualsId';
import dateFilter from '@utils/helpers/dateFilter';
import renderMessage from '@utils/helpers/renderMessage';

import renderServerError from '@utils/renderServerError';
import isAuth from '@utils/middlewares/is-auth';
import getUserProfile from '@utils/middlewares/get-user-profile';

import { LOCALE_PATHS } from '@assets/constants';

(async function letsGo() {
	try {
		Handlebars.registerHelper('ifEqualsId', ifEqualsId);
		Handlebars.registerHelper('dateFilter', dateFilter);
		Handlebars.registerHelper('renderMessage', renderMessage);

		const { pathname } = window.location;

		await isAuth();
		await getUserProfile(pathname === LOCALE_PATHS.settings);
		await getChats();

		processingRouting();
	} catch (e) {
		renderServerError();
	}
}());
