import { LOCALE_PATHS } from '../assets/constants';
import renderer from './renderer';
import EmptyLayout from '../layout/EmptyLayout';
import login from '../pages/Login';
import MainLayout from '../layout/MainLayout';
import Auth from '../pages/Auth';
import NotFound from '../components/Not-found';

const { pathname }: Location = window.location;
const rootSelector: string = '#root';

const processingRouting = (): void => {
	switch (pathname) {
	case LOCALE_PATHS.login:
		EmptyLayout.setProps({
			content: login,
		});

		renderer(rootSelector, EmptyLayout);
		break;

	case LOCALE_PATHS.auth:
		EmptyLayout.setProps({
			content: Auth,
		});

		renderer(rootSelector, EmptyLayout);
		break;

	case LOCALE_PATHS.main:
		renderer(rootSelector, MainLayout);
		break;

	case LOCALE_PATHS.empty:
		EmptyLayout.setProps({
			content: login,
		});

		renderer(rootSelector, EmptyLayout);
		break;

	default:
		EmptyLayout.setProps({
			content: NotFound,
		});

		renderer(rootSelector, EmptyLayout);
		break;
	}
};

export default processingRouting;
