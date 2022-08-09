import { METHOD, Options, OptionsWithoutMethod } from '../types/httpTranspport';

class HTTPTransport {
	get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
		return this.request(url, { ...options, method: METHOD.GET });
	}

	request(url: string, options: Options = { method: METHOD.GET }): Promise<XMLHttpRequest> {
		const { method, data } = options;

		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open(method, url);

			xhr.onload = function onload() {
				resolve(xhr);
			};

			xhr.onabort = reject;
			xhr.onerror = reject;
			xhr.ontimeout = reject;

			if (method === METHOD.GET || !data) {
				xhr.send();
			} else {
				xhr.send(data);
			}
		});
	}
}

const chats = new HTTPTransport().get('https://chats');
console.log('chats', chats);
