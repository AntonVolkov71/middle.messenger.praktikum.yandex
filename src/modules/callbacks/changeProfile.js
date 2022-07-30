import processingRouting from '../../utils/processingRouting';
import { initialOptionsRouting } from '../../assets/config';
import main from '../../pages/main';
import openProfile from '../../components/open-profile';
import profile from '../../components/profile';
import { myProfile } from '../../mock-data';

const clbChangeProfile = () => {
  processingRouting({
    ...initialOptionsRouting,
    main: main({
      isOpenProfile: true,
      openProfile: openProfile(),
      searchChat: null,
      listChats: null,
      profile: profile({ ...myProfile, isShow: false }),
    }),
  });
};

export default clbChangeProfile;
