import { activeChatsOptions, chats } from '../../mock-data';
import processingRouting from '../../utils/processingRouting';
import main from '../../pages/main';
import openProfile from '../../components/open-profile';
import searchChat from '../../components/search-chat';
import listChats from '../../components/list-chats';
import activeChat from '../../components/active-chat';
import listMessages from '../../components/list-messages';
import parseDate from '../../utils/parseDate';
import inputMessage from '../../components/input-message';
import { initialOptionsRouting } from '../../assets/config';

const clbActiveChat = (chatId) => {
  const changeActiveChats = chats.map((chat) => {
    const tempChat = Object.assign(chat);
    tempChat.active = chat.id === +chatId;
    return tempChat;
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
};

export default clbActiveChat;
