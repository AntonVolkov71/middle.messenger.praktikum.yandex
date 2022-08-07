// function handlerChat(clb) {
//   const $activeChat = document.querySelectorAll('.chat__over-click');
//
//   if ($activeChat) {
//     $activeChat.forEach((item) => {
//       item.addEventListener('click', (e) => {
//         const { id } = e.target;
//
//         const prefix = '-';
//         const indexPrefix = id.indexOf(prefix);
//         const activeChatId = id.slice(indexPrefix + 1);
//         clb(activeChatId);
//       });
//     });
//   }
// }
//
// export default handlerChat;
