import localePaths from '../assets/constants';
import renderer from './renderer';
import Pages from '../types/main';

const { pathname } = window.location;
const rootSelector = '#root';

const processingRouting = (pages: Pages): void => {
	const {
		main, auth, login, notFound,
	} = pages;

	switch (pathname) {
	case localePaths.login:
		if (login) {
			renderer(rootSelector, login());
		}
		break;
	case localePaths.auth:
		if (auth) {
			renderer(rootSelector, auth());
		}
		break;
	case localePaths.main:
		if (main) {
			renderer(rootSelector, main());
		}
		break;
	case localePaths.empty:
		if (login) {
			renderer(rootSelector, login());
		}
		break;
	default:
		if (notFound) {
			renderer(rootSelector, notFound());
		}
		break;
	}
};

export default processingRouting;
