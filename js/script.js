// OPEN MODAL

const button_openmodal = document.getElementById('button_openmodal')
button_openmodal.addEventListener('click', headerOpenModal)

const header_modal = document.getElementById('header_modal')
header_modal.addEventListener('click', headerOpenModal)

function headerOpenModal() {
  const  header_modal = document.getElementById('header_modal')
  header_modal.classList.toggle('active')
}

function show(a) {
  document.querySelector('#input_dropdown_menu').value = a
}

// DARK MODE 

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

// SLIDER ALL PROJECT -----------------------------------*

class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    this.init();
  }

  activeSlide(index) {
    this.active = index;
    this.items.forEach((item) => item.classList.remove('active'));
    this.items[index].classList.add('active');
    this.thumbItems.forEach((item) => item.classList.remove('active'));
    this.thumbItems[index].classList.add('active');
    this.autoSlide();
  }

  prev() {
    if (this.active > 0) {
      this.activeSlide(this.active - 1);
    } else {
      this.activeSlide(this.items.length - 1);
    }
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }
  }

  addNavigation() {
    const nextBtn = this.slide.querySelector('.slide-next');
    const prevBtn = this.slide.querySelector('.slide-prev');
    nextBtn.addEventListener('click', this.next);
    prevBtn.addEventListener('click', this.prev);
  }

  addThumbItems() {
    this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
    this.thumbItems = Array.from(this.thumb.children);
  }

  autoSlide() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next, 8000);
  }

  init() {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.items = this.slide.querySelectorAll('.slide-items > *');
    this.thumb = this.slide.querySelector('.slide-thumb');
    this.addThumbItems();
    this.activeSlide(0);
    this.addNavigation();
  }
}

new SlideStories('slide');

