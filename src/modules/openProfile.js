function handlerOpenProfile(clb) {
    const $openProfile = document.querySelector('.openProfile__title');

    if ($openProfile) {
        $openProfile.addEventListener('click', () => {
            clb();
        })
    }
}


export default handlerOpenProfile