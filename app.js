class SliderControl {
	constructor(props = {
        upBtn: '',
        downBtn: '',
        sidebar: '',
        slidesClass: '',
        mainSlide: '',
        container: ''
    }) {
  	this.upBtn = document.querySelector(props.upBtn);
    this.downBtn = document.querySelector(props.downBtn);
    this.sidebar = document.querySelector(props.sidebar);
    this.mainSlide = document.querySelector(props.mainSlide);
    this.container = document.querySelector(props.container);

    this.slidesCount = document.querySelectorAll(props.slidesClass).length;

    if (!this.upBtn) return console.error('upBtn is not defined');
    if (!this.downBtn) return console.error('downBtn is not defined');
    if (!this.sidebar) return console.error('sidebar is not defined');
    if (!this.mainSlide) return console.error('mainSlide is not defined');
    if (!this.container) return console.error('container is not defined');
  }
  
  init() {
    this.activeSlideIndex = 0;
  	this.triggers();
  }
  
  triggers() {
  	this.sidebar.style.top = `-${(this.slidesCount - 1) * 100}vh`;

    this.upBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.changeSlide('up');
    });
    this.downBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.changeSlide('down');
    });
  }

  changeSlide(direction = '') {
    switch (direction) {
        case 'up':
            this.activeSlideIndex++;
            if (this.activeSlideIndex === this.slidesCount) this.activeSlideIndex = 0;
            break;
        case 'down':
            this.activeSlideIndex--;
            if (this.activeSlideIndex < 0) this.activeSlideIndex = this.slidesCount - 1;
            break;
    }

    this.mainSlide.style.transform = `translateY(-${this.activeSlideIndex * this.container.clientHeight}px)`;
    this.sidebar.style.transform = `translateY(${this.activeSlideIndex * this.container.clientHeight}px)`;
  }
}