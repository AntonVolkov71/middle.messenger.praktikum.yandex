import SearchChat from '../templates/components/search-chat';

const searchChat = (props = {}, clb) => new SearchChat(
  'div',
  {
    ...props,
    events: {
      input: (e) => {
        const searchText = e.target.value;
        clb(searchText);
      },
    },
    attr: {
      class: 'searchChat',
    },
  },
);

export default searchChat;
