import localePaths from '../assets/constants';
import renderer from './renderer';

const {pathname} = window.location;
const rootSelector = '#root';

function processingRouting(pages) {
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
