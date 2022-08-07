import ServerError from "../templates/partials/server-error";

const serverError = (props) => {
	return new ServerError(
		'div',
		{
			...props,
			attr: {
				'class': 'server-error'
			}
		}
	)
}

export default serverError
