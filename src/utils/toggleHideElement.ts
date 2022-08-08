const toggleHideElement = (element: HTMLElement, isHidden: boolean): void => {
	if (isHidden) {
		element.classList.add('hidden')
	} else {
		element.classList.remove('hidden');
	}
}

export default toggleHideElement
