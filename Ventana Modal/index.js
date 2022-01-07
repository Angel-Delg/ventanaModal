( () => {
    const $modal = document.querySelector('.modal')
    const $button = document.getElementById('button')
    const $closeModal = document.querySelector('.modal-close')

    $button.addEventListener('click', () => {
        $modal.classList.remove('modal-none')
        setTimeout(() => {
            $button.style.transform = 'translateX(-110%)'
        },200);
    })

    $closeModal.addEventListener('click', () => {
        $modal.classList.add('modal-none')
        setTimeout(() => {
            $button.style.transform = 'translateX(0)'
        },200);
    })

    console.log($closeModal)
    console.log($modal)
    console.log($button)
})();