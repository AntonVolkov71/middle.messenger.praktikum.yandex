// import Handlebars from 'handlebars';
//
// import './styles/style.scss';
//
// import './partials/button';
// import './partials/empty-chats';
// import './partials/input';
// import './partials/message';
// import './partials/chat';
// import serverError from './partials/server-error';
//
// import { initialOptionsRouting } from './assets/config';
//
// import handlerAuth from './modules/handlers/auth';
// import handlerChangeAvatar from './modules/handlers/changeAvatar';
// import handlerChangePassword from './modules/handlers/change-password';
// import handlerChangeProfile from './modules/handlers/change-profile';
// import handlerChat from './modules/handlers/chat';
// import handlerLogin from './modules/handlers/login';
// import handlerOpenProfile from './modules/handlers/openProfile';
// import handlerSearchProfile from './modules/handlers/search-profile';
//
// import clbActiveChat from './modules/callbacks/activeChat';
// import clbChangeAvatar from './modules/callbacks/changeAvatar';
// import clbChangePassword from './modules/callbacks/changePassword';
// import clbChangeProfile from './modules/callbacks/changeProfile';
// import clbOpenProfile from './modules/callbacks/openProfile';
// import clbSearchChats from './modules/callbacks/searchChats';
//
// import processingRouting from './utils/processingRouting';
// import ifEqualsId from './utils/helpers/ifEqualsId';
// import renderServerError from './utils/renderServerError';

import {default as renderDOM} from './utils/testRender'
const test = new Test(
	'div',
	{
		items: [{url: '/', title: 'Main'}],

		events: {
			click: e=> {
				const t = e.target
				console.log('Nav link clicked', t);
			}
		}
	}
)

const content = new Page(
	'div',
	{
		text: 'First text'
	}
)

const page = new Layout(
	'div',
	{
		test: test,
		title: 'Title',
		content: content
	}
)

window.page = page
window.content = content

window.changePageContent=()=>{
	let newContent = new Page(
		'div',
		{
			text: 'Other text'
		}
	);
	
	page.setProps({content: newContent})
}

renderDOM('.app', page)
// try {
//   Handlebars.registerHelper('ifEqualsId', ifEqualsId);
//
//   processingRouting(initialOptionsRouting);
//
//   const handlers = () => {
//     handlerLogin();
//     handlerAuth();
//     handlerOpenProfile(() => {
//       clbOpenProfile();
//       handlers();
//     });
//     handlerChat((chatId) => {
//       clbActiveChat(chatId);
//       handlers();
//     });
//     handlerSearchProfile((searchText) => {
//       clbSearchChats(searchText);
//       handlers();
//     });
//     handlerChangeProfile(() => {
//       clbChangeProfile();
//       handlers();
//     });
//     handlerChangePassword(() => {
//       clbChangePassword();
//       handlers();
//     });
//     handlerChangeAvatar(() => {
//       clbChangeAvatar();
//       handlers();
//     });
//   };
//
//   handlers();
// } catch (e) {
//   renderServerError(serverError({
//     httpStatus: 500,
//   }));
// }
