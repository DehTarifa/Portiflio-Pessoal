// HEADER OPEN MODAL SIDE

const button_openmodal = document.getElementById('button_openmodal')
button_openmodal.addEventListener('click', openModalSide)

function openModalSide() {
  const header_modalSide = document.getElementById('header_modalSide')
  header_modalSide.classList.toggle('activeModal')
}

const modalSide_option = document.getElementById('modalSide_option')
modalSide_option.addEventListener('click', openModalSide)

// MODAL INPUT VALUE 

function headerInputValue(valueA){
  const modalSide_input = document.getElementById('modalSide_input').value = valueA
}