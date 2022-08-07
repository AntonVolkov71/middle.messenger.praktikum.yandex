// import { activeChatsOptions, chats } from '../../assets/mock-data';
// import processingRouting from '../../utils/processingRouting';
// import main from '../../templates/pages/main';
// import openProfile from '../../templates/components/open-profile';
// import searchChat from '../../templates/components/search-chat';
// import listChats from '../../templates/components/list-chats';
// import activeChat from '../../templates/components/active-chat';
// import listMessages from '../../templates/components/list-messages';
// import parseDate from '../../utils/parseDate';
// import inputMessage from '../../templates/components/input-message';
// import { initialOptionsRouting } from '../../assets/config';
//
// const clbActiveChat = (chatId) => {
//   const changeActiveChats = chats.map((chat) => {
//     const tempChat = Object.assign(chat);
//     tempChat.active = chat.id === +chatId;
//     return tempChat;
//   });
//
//   const findChatsOptions = activeChatsOptions().find((item) => item.id === +chatId);
//
//   processingRouting({
//     ...initialOptionsRouting,
//     main: main({
//       openProfile: openProfile(),
//       searchChat: searchChat(),
//       listChats: listChats({
//         chats: changeActiveChats,
//       }),
//       activeChat: findChatsOptions
//         ? activeChat({
//           linkUser: findChatsOptions.linkUser,
//           messages: listMessages({
//             messages: findChatsOptions.messages,
//             myId: 1,
//             dateMessage: parseDate(new Date(), 'dayMonth'),
//           }),
//           inputMessage: inputMessage(),
//         })
//         : null,
//     }),
//   });
// };
//
// export default clbActiveChat;
