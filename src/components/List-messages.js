import ListMessages from "../templates/components/list-messages";


const listMessages = (props)=>{
	return new ListMessages(
		'div',
		{
			...props
		}
	)
}

export default listMessages
