class Slider {
  constructor(sliderId) {
    this.elementSlider = document.getElementById(sliderId);
    this.sliderImgs = this.elementSlider.querySelectorAll('img[name="img"]');

    this.imagenes = [
      "./slideimg/slider1.jpg",
      "./slideimg/slider2.jpg",
      "./slideimg/slider3.jpg",
      "./slideimg/slider4.jpg",
      "./slideimg/slider5.jpg",
    ];
    this.count = 0;
    this.init();
    this.automatic();
  }

  init() {
    this.sliderImgs.forEach((img, index) => {
      img.src = this.imagenes[index];
    });
    const next = document.getElementById("slider-boton-next");
    const prev = document.getElementById("slider-boton-prev");

    prev.addEventListener("click", () => this.movePrevius());
    next.addEventListener("click", () => this.moveNext());
  }

  movePrevius() {
    this.count--;
    if (this.count < 0) {
      this.count = this.imagenes.length - 1;
    }
    this.sliderImgs.forEach((img, index) => {
      img.src = this.imagenes[(index + this.count) % this.imagenes.length];
    });
  }

  moveNext() {
    this.count++;
    if (this.count > this.imagenes.length - 1) {
      this.count = 0;
    }
    this.sliderImgs.forEach((img, index) => {
      img.src = this.imagenes[(index + this.count) % this.imagenes.length];
    });
  }

  automatic() {
    setInterval(() => {
      this.moveNext();
    }, 4000);
  }
}

const slider = new Slider("slider");
