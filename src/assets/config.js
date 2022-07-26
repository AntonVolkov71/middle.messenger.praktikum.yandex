import main from '../pages/main';
import login from '../pages/login';
import auth from '../pages/auth';
import notFound from '../partials/not-found';

const initialOptionsRouting = {
  main: main(),
  login: login(),
  auth: auth(),
  notFound: notFound(),
};

const isOpenProfile = {
  value: false,
};
export { initialOptionsRouting, isOpenProfile };
