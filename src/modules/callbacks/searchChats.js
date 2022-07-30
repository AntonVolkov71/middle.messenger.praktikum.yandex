import openProfile from '../../components/open-profile';
import searchChat from '../../components/search-chat';
import listChats from '../../components/list-chats';
import main from '../../pages/main';
import processingRouting from '../../utils/processingRouting';
import { initialOptionsRouting } from '../../assets/config';
import { chats } from '../../mock-data';

const clbSearchChats = (searchText) => {
  const includesName = (chat) => (chat.name).toLowerCase().includes(searchText.toLowerCase());
  const findChats = chats.filter(includesName);
  processingRouting({
    ...initialOptionsRouting,
    main: main({
      openProfile: openProfile(),
      searchChat: searchChat({ currentValue: searchText }),
      listChats: listChats({ chats: findChats }),
    }),
  });
};

export default clbSearchChats;
