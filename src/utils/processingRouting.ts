import propsEmptyLayout from '../display-components/layout/propsEmptyLayout';
import Router from '../services/routing/Router';
import Layout from '../display-components/layout/Layout';
import Login from '../display-components/pages/Login';
import Auth from '../display-components/pages/Auth';
import propsMainLayout from '../display-components/layout/propsMainLayout';
import { propsMain, MainElement } from '../display-components/pages/Main';
import renderServerError from './renderServerError';
import NotFound from '../display-components/components/Not-found';
import Profile from '../display-components/components/Profile';
import ListChats from '../display-components/components/List-chats';
import SearchChat from '../display-components/components/Search-chat';
import { LOCALE_PATHS } from '../assets/constants';
import CreateChat from '../display-components/components/CreateChat';

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
							createChat: CreateChat,
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
