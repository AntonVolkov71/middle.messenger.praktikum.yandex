import InputMessage from "../templates/components/input-message";

const inputMessage = (props) => {
	return new InputMessage(
		'div',
		{
			...props,
			attr: {
				'class': 'inputMessage'
			}
		}
	)
}

export default inputMessage
