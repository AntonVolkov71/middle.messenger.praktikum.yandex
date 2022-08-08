import Handlebars from 'handlebars';

import './assets/styles/style.scss';

import './templates/partials/button';
import './templates/partials/chat';
import './templates/partials/empty-chats';
import './templates/partials/input';
import './templates/partials/message';

import processingRouting from './utils/processingRouting';
import ifEqualsId from './utils/helpers/ifEqualsId';
import renderServerError from './utils/renderServerError';
import layout from './layout/Layout';
import login from './pages/Login';
import auth from './pages/Auth';
import openProfile from './components/Open-profile';
import searchChat from './components/Search-chat';
import listChats from './components/List-chats';
import notFound from './components/Not-found';
import activeChat from './components/Active-chat';
import inputMessage from './components/Input-message';
import emptyChat from './components/Empty-chat';
import profile from './components/Profile';
import {
	activeChatsOptions, chats, myProfile, urlAvatars,
} from './assets/mock-data';
import inputFile from './components/Input-file';
import main from './pages/Main';
import listMessages from './components/List-messages';
import parseDate from './utils/parseDate';

try {
	Handlebars.registerHelper('ifEqualsId', ifEqualsId);

	const emptyLayout = layout({attr: {class: 'empty-layout'}});
	const mainLayout = layout({attr: {class: 'main-layout'}});

	const components = {
		main: {},
		listChats: {},
		listMessages: {},
		activeChat: {},
		inputMessage: {},
		openProfile: {},
		searchChat: {},
		emptyChat: {},
		profile: {},
		inputFile: {},
	};

	const clbOpenProfile = (isOpenProfile) => {
		if (isOpenProfile) {
			components.searchChat.show();
			components.listChats.show();
			components.main.setProps({content: components.emptyChat});
		} else {
			components.searchChat.hide();
			components.listChats.hide();
			components.main.setProps({content: components.profile});
		}
	};

	const clbSearchChat = (searchText) => {
		const includesName = (chat) => (chat.name).toLowerCase().includes(searchText.toLowerCase());
		const findChats = chats.filter(includesName);

		components.listChats.setProps({
			chats: findChats,
		});
	};

	const clbListChats = (activeChatId) => {
		const findChatsOptions = activeChatsOptions()
			.find((item) => item.id === +activeChatId);
		let linkUser = {};
		let messages = [];

		if (findChatsOptions) {
			messages = findChatsOptions.messages;
			linkUser = findChatsOptions.linkUser;
		} else {
			linkUser = {
				id: 2,
				name: `Name is ${activeChatId}`,
				avatar: urlAvatars[activeChatId],
			};
		}

		components.listMessages.setProps({
			messages,
			myId: 1,
			dateMessage: parseDate(new Date(), 'dayMonth'),
		});

		components.activeChat.setProps({
			linkUser,
			messages: components.listMessages,
			inputMessage: components.inputMessage,
		});

		components.main.setProps({
			content: components.activeChat,
		});
	};

	const clbOpenChangeProfile = () => {
		components.profile.setProps({
			isShow: false,
		});
	};

	const clbSavePassword = (passwords) => {
		console.info('save password', passwords);
	};

	const clbSaveProfileData = (profileData) => {
		console.info('change profile data', profileData);
	};

	const clbChangeAvatar = () => {
		components.inputFile.setProps({
			titleError: 'Ошибка, попробуйте еще разок',
		});
		components.profile.setProps({
			isShow: true,
			inputFile: components.inputFile,
		});
	};

	const clbOpenChangePassword = () => {
		components.profile.setProps({
			isShow: false,
			changePassword: true,
			oldPassword: 'A1245678',
		});
	};

	const clbInputMessage = (message) => {
		console.info('message', message);
	};

	const pages = {
		login() {
			emptyLayout.setProps({content: login({})});
			return emptyLayout;
		},
		auth() {
			emptyLayout.setProps({content: auth({})});
			return emptyLayout;
		},
		main() {
			components.searchChat = searchChat({}, clbSearchChat);
			components.openProfile = openProfile({}, clbOpenProfile);
			components.listChats = listChats({chats}, clbListChats);
			components.emptyChat = emptyChat();
			components.profile = profile({...myProfile, isShow: true},
				{
					clbOpenChangeProfile, clbOpenChangePassword, clbSavePassword, clbSaveProfileData, clbChangeAvatar,
				});
			components.listMessages = listMessages();
			components.activeChat = activeChat();
			components.inputMessage = inputMessage({}, clbInputMessage);
			components.inputFile = inputFile({});

			components.main = main({
				openProfile: components.openProfile,
				searchChat: components.searchChat,
				listChats: components.listChats,
				content: components.emptyChat,
			});

			mainLayout.setProps({
				content: components.main,
			});

			return mainLayout;
		},
		notFound() {
			emptyLayout.setProps({content: notFound()});
			return emptyLayout;
		},
	};

	processingRouting(pages);
} catch (e) {
	renderServerError();
}
