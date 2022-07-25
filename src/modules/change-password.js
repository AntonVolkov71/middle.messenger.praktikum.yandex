

function handlerChangePassword(clb){
    const $changePassword = document.querySelector('.profile__button-change-password')

    if($changePassword){
        $changePassword.addEventListener('click', ()=>{
            clb()
        })
    }
}

export default handlerChangePassword