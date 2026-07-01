const modal = document.getElementById('modal')
const closeModalButton = document.querySelector('dialog button')
const modalContent = document.getElementById('modal-content')

closeModalButton.addEventListener('click', function() {
    modal.close()
})

export function openStoryModal(titulo, autor, historia) {
    modalContent.innerHTML = `
        <h2>${titulo}</h2>
        <p><strong>Autor:</strong> ${autor}</p>
        <p style="white-space: pre-wrap">${historia} </p>
    `

    modal.showModal();
}