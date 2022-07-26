import { initialOptionsRouting, isOpenProfile } from '../../assets/config';
import processingRouting from '../../utils/processingRouting';
import { myProfile } from '../../mock-data';
import main from '../../pages/main';
import listChats from '../../components/list-chats';
import searchChat from '../../components/search-chat';
import profile from '../../components/profile';
import openProfile from '../../components/open-profile';

const clbOpenProfile = () => {
  processingRouting({
    ...initialOptionsRouting,
    main: main({
      isOpenProfile: !isOpenProfile.value,
      openProfile: openProfile(),
      searchChat: isOpenProfile.value ? searchChat() : null,
      listChats: isOpenProfile.value ? listChats() : null,
      profile: profile({ ...myProfile, isShow: true }),
    }),
  });

  isOpenProfile.value = !isOpenProfile.value;
};
export default clbOpenProfile;
