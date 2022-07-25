import render from "./render";
import emptyLayout from "../layouts/empty";

const $root = document.getElementById('root');

function renderServerError(serverError){
    render($root, emptyLayout, serverError);
}

export default renderServerError;