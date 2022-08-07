import InputFile from "../templates/partials/input-file";

const inputFile = (props, elements) => {
	return new InputFile(
		'div',
		{
			...props,
		}
	)
}

export default inputFile
