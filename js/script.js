// FUNCTION DROPDOWN MENU -------------------------*

function show(a) {
  document.querySelector('.input_dropdown_menu').value = a
}

let dropdown = document.querySelector('.header_dropdown_menu')
  dropdown.onclick = function () {
  dropdown.classList.toggle('active')
}

// STYLE P ABOUT ME -----------------------------------*

function openVisual() {
  const aboutP = document.querySelector('.content_aboutme_p')

  aboutP.classList.toggle('p-active')
}

// SCROLL REVELATION -----------------------------------*

window.sr = ScrollReveal({ reset: true});

sr.reveal('.defaut_section', { duration: 1500 })
sr.reveal('.title_section', {
  rotate: { x: 100, y: 0, z: 0},
  duration: 1500,
})

