import OpenProfile from '../templates/components/open-profile';
import emptyChat from './Empty-chat';

const openProfile = (getMain, getSearch, getListChats, getProfile) => {
  let isOpenProfile = false;

  return new OpenProfile(
    'div',
    {
      events: {
        click: (e) => {
					e.preventDefault();
          const mainElement = getMain();
          const searchElement = getSearch();
          const listChatsElement = getListChats();
          const profileElement = getProfile();

          if (isOpenProfile) {
            searchElement.show();
            listChatsElement.show();

            mainElement.setProps({ content: emptyChat() });
          } else {
            searchElement.hide();
            listChatsElement.hide();

            mainElement.setProps({
              content: profileElement,
            });
          }

          isOpenProfile = !isOpenProfile;
        },
      },
      attr: {
        class: 'openProfile',
      },
    },
  );
};

export default openProfile;
