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
import { chats, myProfile } from './assets/mock-data';
import inputFile from './components/Input-file';
import main from './pages/Main';
import listMessages from './components/List-messages';

try {
  Handlebars.registerHelper('ifEqualsId', ifEqualsId);

  const emptyLayout = layout({ attr: { class: 'empty-layout' } });
  const mainLayout = layout({ attr: { class: 'main-layout' } });

  const componentListChats = listChats({ chats }, {
    getMain, getListChats, getActiveChat, getInputMessage, getListMessages,
  });
  const componentListMessages = listMessages();
  const componentActiveChat = activeChat();
  const componentInputMessage = inputMessage();
  const componentOpenProfile = openProfile(getMain, getSearchChat, getListChats, getProfile);
  const componentSearchChat = searchChat(getListChats);
  const componentEmptyChat = emptyChat();
  const componentProfile = profile({ ...myProfile, isShow: true }, { getProfile, getInputFile });

  const componentInputFile = inputFile();

  const componentMain = main({
    openProfile: componentOpenProfile,
    searchChat: componentSearchChat,
    listChats: getListChats(),
    content: getEmptyChat(),
  });

  const pages = {
    login() {
      emptyLayout.setProps({ content: login({}) });
      return emptyLayout;
    },
    auth() {
      emptyLayout.setProps({ content: auth({}) });
      return emptyLayout;
    },
    main() {
      mainLayout.setProps({
        content: componentMain,
      });
      return mainLayout;
    },
    notFound() {
      emptyLayout.setProps({ content: notFound() });
      return emptyLayout;
    },
  };

  function getMain() {
    return componentMain;
  }

  function getSearchChat() {
    return componentSearchChat;
  }

  function getListChats() {
    return componentListChats;
  }

  function getListMessages() {
    return componentListMessages;
  }

  function getActiveChat() {
    return componentActiveChat;
  }

  function getProfile() {
    return componentProfile;
  }

  function getInputFile() {
    return componentInputFile;
  }

  function getInputMessage() {
    return componentInputMessage;
  }

  function getEmptyChat() {
    return componentEmptyChat;
  }

  processingRouting(pages);
} catch (e) {
  renderServerError();
}
