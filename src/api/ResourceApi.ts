import { ResourcePaths } from '../types/api-paths';
import Api from './Api';
import { Options } from '../types/httpTranspport';
import { isStatusServerError } from '../utils/api';
import { ResponseResource } from '../types/api';

class ResourceApi extends Api {
	private readonly resourcePath: string = ResourcePaths.RESOURCES;

	constructor(url: string) {
		super(url);
	}

	public async sendFileToResource(file: File): Promise<ResponseResource> {
		const url = `${this.url}/${this.resourcePath}`;

		const data = new FormData();
		data.append('resource', file);

		const options: Options = {
			...this.options,
			headers: {
			},
			data,
		};
		const response: XMLHttpRequest = await this.post(url, options);

		return {
			statusCode: response.status,
			data: isStatusServerError(response.status) ? response.response : JSON.parse(response.response),
		};
	}
}

export default ResourceApi;
