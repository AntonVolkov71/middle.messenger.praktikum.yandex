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
		case localePaths['login']:
			login ? renderer(rootSelector, login()) : null;
			break;
		case localePaths['auth']:
			auth ? renderer(rootSelector, auth()) : null;
			break;
		case localePaths['main']:
			main ? renderer(rootSelector, main()) : null;
			break;
		case localePaths['empty']:
			login ? renderer(rootSelector, login()) : null;
			break;
		default:
			notFound ? renderer(rootSelector, notFound()) : null;
			break;
	}
}

export default processingRouting;
