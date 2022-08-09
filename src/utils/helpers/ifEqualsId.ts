import * as Handlebars from 'handlebars';

function ifEqualsId(this: any, arg1: string, arg2: string, options: Handlebars.HelperOptions) {
	return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
}

export default ifEqualsId;
