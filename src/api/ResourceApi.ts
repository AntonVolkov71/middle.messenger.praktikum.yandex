import { isStatusServerError } from '@utils/api';
import { ResourcePaths } from '@myTypes/api-paths';
import { Options } from '@myTypes/httpTranspport';
import { ResponseResource } from '@myTypes/api';
import Api from './Api';

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
