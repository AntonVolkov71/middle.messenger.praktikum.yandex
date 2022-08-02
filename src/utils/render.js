function render(root, layout, element) {
	const tempRoot = Object.assign(root);
	tempRoot.innerHTML = layout({ content: element });
}

export default render;
