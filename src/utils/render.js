function render(root, layout, element) {
    root.innerHTML = layout({content: element})
}

export default render