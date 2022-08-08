import Component from "../services/Component";

const renderer = (query: string, element: Component) => {
	const root: HTMLElement | null = document.querySelector(query);

	if (root) {
		const node: HTMLElement | null = element.getContent();
		if (node) {
			root.appendChild(node);
		}
	}

	element.dispatchComponentDidMount();

	return root;
};

export default renderer;
