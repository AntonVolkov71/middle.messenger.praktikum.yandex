const renderer = (query, element) => {
  const root = document.querySelector(query);
	console.log('renderer',);
  if (root) {
    root.appendChild(element.getContent());
  }

  element.dispatchComponentDidMount();

  return root;
};

export default renderer;
