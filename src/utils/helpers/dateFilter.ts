import { HelperOptions } from 'handlebars';
import { ParseDateTypes } from '@myTypes/utils';
import parseDate from '@utils/parseDate';

function dateFilter(this: string, options:HelperOptions) {
	const rawDate:string = options.fn(this);

	if (rawDate) {
		const currentDate: Date = new Date(rawDate);

		return parseDate(currentDate, ParseDateTypes.DAY_MONTH);
	}

	return options.fn(this);
}

export default dateFilter;
