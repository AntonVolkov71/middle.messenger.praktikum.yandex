import Component from "../services/Component";

interface Pages {
	[key:string]: ()=> Component
}

export default Pages;
