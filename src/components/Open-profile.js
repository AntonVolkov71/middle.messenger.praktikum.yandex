import OpenProfile from '../templates/components/open-profile';

const openProfile = (props = {}, clb) => {
  let isOpenProfile = false;

  return new OpenProfile(
    'div',
    {
      ...props,
      events: {
        click: (e) => {
          e.preventDefault();
          clb(isOpenProfile);

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
