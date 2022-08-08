import ListChats from '../templates/components/list-chats';

const listChats = (props = {}, clb) => new ListChats(
  'div',
  {
    ...props,
    events: {
      activeChat: (e, listChatsComponent) => {
        const { id } = e.target;
        const prefix = '-';
        const indexPrefix = id.indexOf(prefix);
        const activeChatId = id.slice(indexPrefix + 1);

        const changeActiveChats = props.chats.map((chat) => {
          const tempChat = Object.assign(chat);
          tempChat.active = chat.id === +activeChatId;
          return tempChat;
        });

        listChatsComponent.setProps({
          chats: changeActiveChats,
        });

        clb(activeChatId);
      },
    },
    attr: {
      class: 'listChats',
    },
  },
);

export default listChats;
