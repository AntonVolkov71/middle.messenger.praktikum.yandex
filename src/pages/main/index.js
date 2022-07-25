import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';
import openProfile from "../../components/open-profile";
import searchChat from "../../components/search-chat";
import listChats from "../../components/list-chats";

Handlebars.registerPartial('main', tpl);

export default (props = {
    openProfile: openProfile(),
    searchChat: searchChat(),
    listChats: listChats(),
}) => tpl(props);
