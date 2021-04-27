const galleryContainer = document.querySelector(".gallery-container");
const galleryItems = document.querySelectorAll(".gallery-item");

class Carousel {
    constructor(container, items) {
        this.carouselContainer = container;
        this.carouselArray = [...items];
    }

    // Update css classes for gallery
    updateGallery() {
        this.carouselArray.forEach((el) => {
            el.classList.remove("gallery-item-1");
            el.classList.remove("gallery-item-2");
            el.classList.remove("gallery-item-3");
            el.classList.remove("gallery-item-4");
            el.classList.remove("gallery-item-5");
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems);

setInterval(function () {
    // do your thing
    exampleCarousel.carouselArray.push(exampleCarousel.carouselArray.shift());
    exampleCarousel.updateGallery();
}, 2000);
