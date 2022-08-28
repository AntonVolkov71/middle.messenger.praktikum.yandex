import propsEmptyLayout from '../layout/propsEmptyLayout';
import Router from '../services/routing/Router';
import Layout from '../layout/Layout';
import Login from '../pages/Login';
import Auth from '../pages/Auth';
import propsMainLayout from '../layout/propsMainLayout';
import { propsMain, MainElement } from '../pages/Main';
import renderServerError from './renderServerError';
import NotFound from '../components/Not-found';
import Profile from '../components/Profile';
import ListChats from '../components/List-chats';
import SearchChat from '../components/Search-chat';
import { LOCALE_PATHS } from '../assets/constants';

const rootSelector: string = '#root';

const processingRouting = (): void => {
	try {
		const router = new Router(rootSelector, '/notfound');

		router
			.use(
				LOCALE_PATHS.main,
				Layout,
				'div',
				{
					...propsEmptyLayout,
					content: Login,
				},
			)
			.use(
				LOCALE_PATHS.signUp,
				Layout,
				'div',
				{
					...propsEmptyLayout,
					content: Auth,
				},
			)
			.use(
				LOCALE_PATHS.messenger,
				Layout,
				'div',
				{
					...propsMainLayout,
					content: new MainElement(
						'div',
						{
							...propsMain,
							listChats: ListChats,
							searchChat: SearchChat,
						},
					),
				},
			)

			.use(
				LOCALE_PATHS.settings,
				Layout,
				'div',
				{
					...propsMainLayout,
					content: new MainElement(
						'div',
						{
							...propsMain,
							content: Profile,
						},
					),
				},
			)
			.use(
				LOCALE_PATHS.notfound,
				Layout,
				'div',
				{
					...propsEmptyLayout,
					content: NotFound,
				},
			)

			.start();
	} catch (e) {
		console.log('e');
		renderServerError();
	}
};

export default processingRouting;
