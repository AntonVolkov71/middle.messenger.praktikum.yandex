interface DataLastMessage {
	content: string;
	time: string;
	ofUnread: number;
}

interface Chat {
	id: number,
	name: string,
	dataLastMessage: DataLastMessage;
	avatar: string;
	active: boolean;
}

interface LinkUser {
	id: number;
	name: string;
	avatar: string;
}

interface Message {
	id: number;
	content: {
		text: string| null,
		image: string | null,
	},
	time: string;
	author: {
		id: number,
	};
	unread? : boolean
}

interface ActiveChatsOptions {
	id: number,
	linkUser: LinkUser;
	messages: Message[]
}

interface User {
	id: 1,
	login: string;
	password: string;
	email: string;
	name: string;
	secondName: string;
	nameInChat: string;
	phone: string;
	avatar: string;

}

export {Chat, ActiveChatsOptions,User, LinkUser, Message}
