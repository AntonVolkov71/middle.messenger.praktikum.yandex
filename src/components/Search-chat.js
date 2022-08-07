import SearchChat from '../templates/components/search-chat';
import { chats } from '../assets/mock-data';

const searchChat = (getListChats) => new SearchChat(
  'div',
  {
    events: {
      input: (e) => {
        const searchText = e.target.value;
        const includesName = (chat) => (chat.name).toLowerCase().includes(searchText.toLowerCase());
        const findChats = chats.filter(includesName);

        const elementListChats = getListChats();
        elementListChats.setProps({ chats: findChats });
      },
    },
    attr: {
      class: 'searchChat',
    },
  },
);

export default searchChat;
