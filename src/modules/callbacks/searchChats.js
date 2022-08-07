// import openProfile from '../../templates/open-profile';
// import searchChat from '../../templates/search-chat';
// import listChats from '../../templates/list-chats';
// import main from '../../templates/main';
// import processingRouting from '../../utils/processingRouting';
// import { initialOptionsRouting } from '../../assets/config';
// import { chats } from '../../mock-data';
//
// const clbSearchChats = (searchText) => {
//   const includesName = (chat) => (chat.name).toLowerCase().includes(searchText.toLowerCase());
//   const findChats = chats.filter(includesName);
//   processingRouting({
//     ...initialOptionsRouting,
//     main: main({
//       openProfile: openProfile(),
//       searchChat: searchChat({ currentValue: searchText }),
//       listChats: listChats({ chats: findChats }),
//     }),
//   });
// };
//
// export default clbSearchChats;
