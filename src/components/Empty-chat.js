import EmptyChats from '../templates/partials/empty-chats';

const emptyChat = () => new EmptyChats(
  'div',
  {
    attr: {
      class: 'emptyChat',
    },
  },
);

export default emptyChat;
