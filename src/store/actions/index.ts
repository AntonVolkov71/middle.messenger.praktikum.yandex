import * as authApiActions from './authApi';
import * as loginActions from './login';
import * as authActions from './auth';
import * as profileActions from './profile';
import * as inputFileActions from './input-file';
import * as chatsActions from './chats';
import * as createChatActions from './createChat';
import * as activeChatActions from './active-chat';
import * as sendMessageActions from './sendMessage';
import * as chatMenuActions from './chatMenu';
import * as messagesActions from './messages';

const Actions = {
	authApi: { ...authApiActions },
	login: { ...loginActions },
	auth: { ...authActions },
	profile: { ...profileActions },
	inputFile: { ...inputFileActions },
	chats: { ...chatsActions },
	createChat: { ...createChatActions },
	activeChat: { ...activeChatActions },
	sendMessage: { ...sendMessageActions },
	chatMenu: { ...chatMenuActions },
	messages: { ...messagesActions },
};

export default Actions;
