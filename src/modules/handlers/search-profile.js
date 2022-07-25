function handlerSearchProfile(clb) {
    const $search = document.querySelector('.searchChat__input')

    if ($search) {
        $search.addEventListener('input', e => {
            clb(e.target.value)
        })
    }
}

export default handlerSearchProfile