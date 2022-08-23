import { Method, Options, OptionsWithoutMethod } from '../types/httpTranspport';

class HTTPTransport {
	get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
		return this.request(url, { ...options, method: Method.GET });
	}

	request(url: string, options: Options = { method: Method.GET }): Promise<XMLHttpRequest> {
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

			if (method === Method.GET || !data) {
				xhr.send();
			} else {
				xhr.send(data);
			}
		});
	}
}
