import * as Handlebars from 'handlebars';

import './assets/styles/style.scss';

import './display-components/partials/button';
import './display-components/partials/chat';
import './display-components/components/Empty-chat';
import './display-components/partials/input';
import './display-components/partials/message';
import './display-components/partials/modal';
import './display-components/partials/formFields/field';
import './display-components/partials/formFields/email';
import './display-components/partials/formFields/first-name';
import './display-components/partials/formFields/second-name';
import './display-components/partials/formFields/login';
import './display-components/partials/formFields/display-name';
import './display-components/partials/formFields/phone';
import './display-components/partials/formFields/password';
import './display-components/partials/formFields/password-repeat';
import './display-components/partials/formFields/password-old';

import processingRouting from './utils/processingRouting';
import ifEqualsId from './utils/helpers/ifEqualsId';
import dateFilter from './utils/helpers/dateFilter';
import renderMessage from './utils/helpers/renderMessage';

import renderServerError from './utils/renderServerError';
import isAuth from './utils/middlewares/is-auth';
import getUserProfile from './utils/middlewares/get-user-profile';
import { getChats } from './utils/middlewares/get-chats';

import { LOCALE_PATHS } from './assets/constants';

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
