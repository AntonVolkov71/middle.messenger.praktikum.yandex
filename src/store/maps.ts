import {
	AuthState, InputFileState, LoginState, ProfileState, State, StoreEvents,
} from '../types/state';
import Component from '../services/Component';
import { Props } from '../types/component';
import Store from './Store';
import isEqual from '../utils/myDash/isEqual';

export const connect = (mapStateToProps: (state: State) => any) => function block(Block: typeof Component) {
	return class extends Block {
		constructor(tag: string, props: Props) {
			const store = new Store();
			let state = mapStateToProps(store.getState());
			super(tag, { ...props, ...state });

			store.on(StoreEvents.UPDATED, () => {
				const newState = mapStateToProps(store.getState());

				if (!isEqual(state, newState)) {
					this.setProps({ ...newState });
				}

				state = newState;
			});
		}
	};
};

export const mapLoginToProps = (state: State): LoginState => ({
	error: state.login?.error,
});

export const mapAuthToProps = (state: State): AuthState => ({
	error: state.auth?.error,
});

export const mapProfileToProps = (state: State): ProfileState => ({
	error: state.profile?.error,
	user: {
		id: state.profile?.user?.id,
		login: state.profile?.user?.login,
		avatar: state.profile?.user?.avatar,
		email: state.profile?.user?.email,
		display_name: state.profile?.user?.display_name,
		first_name: state.profile?.user?.first_name,
		second_name: state.profile?.user?.second_name,
		phone: state.profile?.user?.phone,
	},
	isShow: state.profile?.isShow,
	isChangePassword: state.profile?.isChangePassword,
	errorInputFile: state.profile?.errorInputFile,
});

export const mapInputFileToProps = (state: State): InputFileState => ({
	successTitle: state.inputFile?.successTitle,
	errorTitle: state.inputFile?.errorTitle,
	title: state.inputFile?.title,
	nameFile: state.inputFile?.nameFile,
});
