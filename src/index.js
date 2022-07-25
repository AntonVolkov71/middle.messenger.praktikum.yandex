import './styles/style.scss';
import { activeChatsOptions, chats, existUsers } from './mock-data';

import button from './partials/button';
import emptyChats from './partials/empty-chats';
import input from './partials/input';
import inputFile from './partials/input-file';
import message from './partials/message';
import notFound from './partials/not-found';
import serverError from './partials/server-error';

import activeChat from './components/active-chat';
import auth from './pages/auth';
import inputMessage from './components/input-message';
import listChats from './components/list-chats';
import listMessages from './components/list-messages';
import login from './pages/login';
import main from './pages/main';
import openProfile from './components/open-profile';
import profile from './components/profile';
import searchChat from './components/search-chat';

import handlerAuth from './modules/handlers/auth';
import handlerChangeAvatar from './modules/handlers/changeAvatar';
import handlerChangePassword from './modules/handlers/change-password';
import handlerChangeProfile from './modules/handlers/change-profile';
import handlerChat from './modules/handlers/chat';
import handlerLogin from './modules/handlers/login';
import handlerOpenProfile from './modules/handlers/openProfile';
import handlerSearchProfile from './modules/handlers/search-profile';

import parseDate from './utils/parseDate';
import processingRouting from './utils/processingRouting';
import renderServerError from './utils/renderServerError';

try {
  const initialOptionsRouting = {
    main: main(),
    login: login(),
    auth: auth(),
    notFound: notFound(),
  };

  let isOpenProfile = false;
  const myProfile = existUsers.find((item) => item.id === 1);

  processingRouting(initialOptionsRouting);

  function handlers() {
    handlerLogin();
    handlerAuth();
    handlerOpenProfile(clbOpenProfile);
    handlerChat(clbActiveChat);
    handlerSearchProfile(clbSearchChats);
    handlerChangeProfile(clbChangeProfile);
    handlerChangePassword(clbChangePassword);
    handlerChangeAvatar(clbChangeAvatar);
  }

  function clbActiveChat(chatId) {
    const changeActiveChats = chats.map((chat) => {
      chat.active = chat.id === +chatId;
      return chat;
    });

    const findChatsOptions = activeChatsOptions().find((item) => item.id === +chatId);

    processingRouting({
      ...initialOptionsRouting,
      main: main({
        openProfile: openProfile(),
        searchChat: searchChat(),
        listChats: listChats({
          chats: changeActiveChats,
        }),
        activeChat: findChatsOptions
          ? activeChat({
            linkUser: findChatsOptions.linkUser,
            messages: listMessages({
              messages: findChatsOptions.messages,
              myId: 1,
              dateMessage: parseDate(new Date(), 'dayMonth'),
            }),
            inputMessage: inputMessage(),
          })
          : null,
      }),
    });

    handlers();
  }

  function clbSearchChats(searchText) {
    const findChats = chats.filter((el) => (el.name).toLowerCase().includes(searchText.toLowerCase()));

    processingRouting({
      ...initialOptionsRouting,
      main: main({
        openProfile: openProfile(),
        searchChat: searchChat({ currentValue: searchText }),
        listChats: listChats({ chats: findChats }),
      }),
    });

    handlers();
  }

  function clbOpenProfile() {
    processingRouting({
      ...initialOptionsRouting,
      main: main({
        isOpenProfile: !isOpenProfile,
        openProfile: openProfile(),
        searchChat: isOpenProfile ? searchChat() : null,
        listChats: isOpenProfile ? listChats() : null,
        profile: profile({ ...myProfile, isShow: true }),
      }),
    });

    isOpenProfile = !isOpenProfile;

    handlers();
  }

  function clbChangeProfile() {
    processingRouting({
      ...initialOptionsRouting,
      main: main({
        isOpenProfile: true,
        openProfile: openProfile(),
        searchChat: null,
        listChats: null,
        profile: profile({ ...myProfile, isShow: false }),
      }),
    });

    handlers();
  }

  function clbChangePassword() {
    processingRouting({
      ...initialOptionsRouting,
      main: main({
        isOpenProfile: true,
        openProfile: openProfile(),
        searchChat: null,
        listChats: null,
        profile: profile({
          ...myProfile,
          isShow: false,
          changePassword: true,
          oldPassword: '12456',
        }),
      }),
    });

    handlers();
  }

  function clbChangeAvatar() {
    processingRouting({
      ...initialOptionsRouting,
      main: main({
        isOpenProfile: true,
        openProfile: openProfile(),
        searchChat: null,
        listChats: null,
        profile: profile({
          ...myProfile,
          isShow: true,
          inputFile: inputFile({
            titleError: 'Ошибка, попробуйте еще разок',
          }),
        }),
      }),
    });

    handlers();
  }

  handlers();
} catch (e) {
  renderServerError(serverError({
    httpStatus: 500,
  }));
}
