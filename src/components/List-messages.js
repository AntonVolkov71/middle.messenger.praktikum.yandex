import ListMessages from '../templates/components/list-messages';

const listMessages = (props) => new ListMessages(
  'div',
  {
    ...props,
  },
);

export default listMessages;
