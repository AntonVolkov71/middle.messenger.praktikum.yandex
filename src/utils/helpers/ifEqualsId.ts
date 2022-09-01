import * as Handlebars from 'handlebars';

function ifEqualsId(this: any, arg1: number, arg2: number, options: Handlebars.HelperOptions) {
	return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
}

export default ifEqualsId;
