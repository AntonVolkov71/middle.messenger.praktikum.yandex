import EmptyChats from "../templates/partials/empty-chats";


const emptyChat = () => {
	return new EmptyChats(
		'div',
		{
			attr: {
				'class': 'emptyChat'
			}
		}
	)
}

export default emptyChat
