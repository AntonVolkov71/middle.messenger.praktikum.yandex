import ActiveChat from '../templates/components/active-chat';
import {Props} from "../types/component";
import Component from "../services/Component";

const activeChat = (props: Props= {}): Component => new ActiveChat(
  'div',
  {
    ...props,
    attr: {
      'class': 'activeChat',
    },
  },
);

export default activeChat;
