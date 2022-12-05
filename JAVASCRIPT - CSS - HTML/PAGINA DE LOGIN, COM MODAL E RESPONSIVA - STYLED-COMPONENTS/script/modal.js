class Modal {

    static showModal() {
        const modalBtn = document.querySelector('.link--cadastro')
        const modal = document.querySelector('.modal')


        modalBtn.addEventListener('click', () => {
            modal.classList.toggle('hidden')
        })

    }

    static closeModal() {
        const closeBtn = document.getElementById('closeBtn')
        const modal = document.querySelector('.modal')

        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden')
        })
    }

}

Modal.showModal()
Modal.closeModal()