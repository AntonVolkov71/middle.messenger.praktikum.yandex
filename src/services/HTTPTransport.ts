import { Method, Options, RequestOptions } from '../types/httpTranspport';

class HTTPTransport {
	get(url: string, options: Options = {} as Options): Promise<XMLHttpRequest> {
		return this.request(url, {
			...options,
			method: Method.GET,
		});
	}

	post(url: string, options: Options = {} as Options): Promise<XMLHttpRequest> {
		return this.request(url, {
			...options,
			method: Method.POST,
		});
	}

	put(url: string, options: Options = {} as Options): Promise<XMLHttpRequest> {
		return this.request(url, {
			...options,
			method: Method.PUT,
		});
	}

	request(url: string, options: RequestOptions): Promise<XMLHttpRequest> {
		const {
			method,
			data,
			headers,
			withCredentials,
		} = options;

		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open(method, url);

			for (const key in headers) {
				const headersValue = headers[key];

				if (headersValue) {
					xhr.setRequestHeader(key, headersValue);
				}
			}

			xhr.onload = function onload() {
				resolve(xhr);
			};

			xhr.onabort = reject;
			xhr.onerror = reject;
			xhr.ontimeout = reject;
			
			withCredentials
				? xhr.withCredentials = true
				: null;

			if (method === Method.GET || !data) {
				xhr.send();
			} else {
				xhr.send(data);
			}
		});
	}
}

export default HTTPTransport;
