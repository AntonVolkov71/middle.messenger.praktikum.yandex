import * as authApiActions from './authApi';
import * as loginActions from './login';
import * as authActions from './auth';
import * as profileActions from './profile';
import * as inputFileActions from './input-file';

const Actions = {
	authApi: { ...authApiActions },
	login: { ...loginActions },
	auth: { ...authActions },
	profile: { ...profileActions },
	inputFile: { ...inputFileActions },
};

export default Actions;
