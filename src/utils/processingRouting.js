import localePaths from '../assets/constants';
import emptyLayout from '../layouts/empty';
import mainLayout from '../layouts/main';
import render from './render';
import test from "../components/test";

const { pathname } = window.location;
const $root = document.getElementById('root');

function processingRouting(pages) {
  const {
    main, auth, login, notFound,
  } = pages;

  switch (pathname) {
		case '/test':
			render($root, emptyLayout, test)
			break;
    case localePaths.login:
      render($root, emptyLayout, login);
      break;
    case localePaths.auth:
      render($root, emptyLayout, auth);
      break;
    case localePaths.main:
      render($root, mainLayout, main);
      break;
    case localePaths.empty:
      render($root, emptyLayout, login);
      break;
    default:
      render($root, emptyLayout, notFound);
      break;
  }
}

export default processingRouting;
