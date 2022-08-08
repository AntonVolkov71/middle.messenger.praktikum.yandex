import localePaths from '../assets/constants';
import renderer from './renderer';
import Pages from "../types/main";

const {pathname} = window.location;
const rootSelector = '#root';

const processingRouting = (pages: Pages): void => {
	const {
		main, auth, login, notFound,
	} = pages;

	switch (pathname) {
		case localePaths.login:
			renderer(rootSelector, login());
			break;
		case localePaths.auth:
			renderer(rootSelector, auth());
			break;
		case localePaths.main:
			renderer(rootSelector, main());
			break;
		case localePaths.empty:
			renderer(rootSelector, login());
			break;
		default:
			renderer(rootSelector, notFound());
			break;
	}
}

export default processingRouting;
