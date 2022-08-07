import ActiveChat from '../templates/components/active-chat';

const activeChat = (props) => new ActiveChat(
  'div',
  {
    ...props,
    attr: {
      class: 'activeChat',
    },
  },
);

export default activeChat;
