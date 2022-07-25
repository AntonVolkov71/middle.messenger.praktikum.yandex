import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';
import chat from "../chat";
import {chats} from "../../mock-data";

Handlebars.registerPartial('listChats', tpl);

export default (props = {
    chats,
}) => tpl(props);
