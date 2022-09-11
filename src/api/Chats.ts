import { isStatusServerError } from '@utils/api';
import { ChatsPaths } from '@myTypes/api-paths';
import { Options } from '@myTypes/httpTranspport';
import {
	AddOrDeleteUser,
	AddUser,
	CreateChatDto,
	ResponseChats,
	ResponseChatsToken,
	ResponseCreateChat,
	ResponseUserChat,
} from '@myTypes/api';
import Api from './Api';

class ChatsApi extends Api {
	private readonly chatsPath: string = ChatsPaths.CHATS;

	constructor(url: string) {
		super(url);
	}

	public async getChats():Promise<ResponseChats> {
		const url = `${this.url}/${this.chatsPath}`;

		const options: Options = {
			...this.options,
		};

		const response: XMLHttpRequest = await this.get(url, options);

		return {
			statusCode: response.status,
			data: isStatusServerError(response.status) ? response.response : JSON.parse(response.response),
		};
	}

	public async getTokenChat(chatId: number):Promise<ResponseChatsToken> {
		const url = `${this.url}/${this.chatsPath}/${ChatsPaths.TOKEN}/${chatId}`;

		const options: Options = {
			...this.options,
		};

		const response: XMLHttpRequest = await this.post(url, options);

		return {
			statusCode: response.status,
			data: isStatusServerError(response.status)
				? response.response
				: JSON.parse(response.response) as ResponseChatsToken,
		};
	}

	public async createChats(data: CreateChatDto):Promise<ResponseCreateChat> {
		const url = `${this.url}/${this.chatsPath}`;

		const options: Options = {
			...this.options,
			data: JSON.stringify(data),
		};

		const response: XMLHttpRequest = await this.post(url, options);

		return {
			statusCode: response.status,
			data: isStatusServerError(response.status)
				? response.response
				: JSON.parse(response.response) as ResponseChatsToken['data'],
		};
	}

	public async getUserChats(chatId: number): Promise<ResponseUserChat> {
		const url = `${this.url}/${ChatsPaths.CHATS}/${chatId}/${ChatsPaths.USERS}`;

		const options: Options = {
			...this.options,
		};

		const response: XMLHttpRequest = await this.get(url, options);

		return {
			statusCode: response.status,
			data: isStatusServerError(response.status) ? response.response : JSON.parse(response.response),
		};
	}

	public async addUser(data: AddUser, type: AddOrDeleteUser) {
		const url = `${this.url}/${ChatsPaths.CHATS}/${ChatsPaths.USERS}`;

		const options: Options = {
			...this.options,
			data: JSON.stringify(data),
		};

		let response:XMLHttpRequest;

		switch (type) {
		case AddOrDeleteUser.DELETE:
			response = await this.delete(url, options);
			break;

		case AddOrDeleteUser.PUT:
			response = await this.put(url, options);
			break;

		default:
			response = await this.put(url, options);
		}

		return {
			statusCode: response.status,
			data: response.response,
		};
	}
}

export default ChatsApi;
