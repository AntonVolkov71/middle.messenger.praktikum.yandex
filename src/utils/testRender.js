const testRender = (query, component)=> { // TODO testRender -> renderDOM
	const root = document.querySelector(query)
	
	if(root){
		root.appendChild(component.getContent())
	}
	
	component.dispatchComponentDidMount();
	
	return root;
}

export default testRender
