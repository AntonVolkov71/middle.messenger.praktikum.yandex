import * as Handlebars from 'handlebars';

import './assets/styles/style.scss';

import './partials/button';
import './partials/chat';
import './components/Empty-chat';
import './partials/input';
import './partials/message';
import './partials/formFields/field';
import './partials/formFields/email';
import './partials/formFields/first-name';
import './partials/formFields/second-name';
import './partials/formFields/login';
import './partials/formFields/display-name';
import './partials/formFields/phone';
import './partials/formFields/password';
import './partials/formFields/password-repeat';
import './partials/formFields/password-old';

import processingRouting from './utils/processingRouting';
import ifEqualsId from './utils/helpers/ifEqualsId';

import renderServerError from './utils/renderServerError';
import isAuth from './utils/middlewares/is-auth';
import getUserProfile from './utils/middlewares/get-user-profile';

(async function letsGo() {
	try {
		Handlebars.registerHelper('ifEqualsId', ifEqualsId);

		await isAuth();
		await getUserProfile();
		processingRouting();
	} catch (e) {
		renderServerError();
	}
}());
