import EmptyChat from '../../components/Empty-chat';
import Main from '../../pages/Main';
import Profile from '../../components/Profile';

const handlerOpenProfile = (main: typeof Main, isOpen: boolean): void => {
	if (isOpen) {
		main.setProps({
			content: Profile,
		});

		main.props.searchChat.hide();
		main.props.listChats.hide();
	} else {
		main.props.searchChat.show();
		main.props.listChats.show();

		main.setProps({
			content: EmptyChat,
		});
	}
};

export default handlerOpenProfile;
