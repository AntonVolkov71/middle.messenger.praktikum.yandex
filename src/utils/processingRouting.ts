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

const rootSelector: string = '#root';

const processingRouting = (): void => {
	try {
		const router = new Router(rootSelector, '/notfound');
		console.log('processingRouting');
		router
			.use(
				'/',
				Layout,
				'div',
				{
					...propsEmptyLayout,
					content: Login,
				},
			)
			.use(
				'/sign-up',
				Layout,
				'div',
				{
					...propsEmptyLayout,
					content: Auth,
				},
			)
			.use(
				'/messenger',
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
				'/settings',
				Layout,
				'div',
				{
					...propsMainLayout,
					content: new MainElement(
						'div',
						{ ...propsMain, content: Profile },
					),
				},
			)
			.use(
				'/notfound',
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
