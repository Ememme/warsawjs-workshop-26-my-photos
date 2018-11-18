const imagesWrapper = document.getElementById('images');
const favorites = document.getElementById('show-favourites');
const imagePath = ['images/DSC05386.JPG', 'images/DSC05389.JPG', 'images/DSC05396.JPG'];


class Image {
  constructor(path) {
    this.path = path;
  }

  // creating image
  show() {
    const image = document.createElement('img');
    image.setAttribute('src', this.path);
    image.addEventListener('click', () => this.markOrUnmarkAsFavourite());
    imagesWrapper.appendChild(image);
    // przypięcie do this
    this.imageElement = image;
  }

  // toggle favourites;
  markOrUnmarkAsFavourite() {
    this.imageElement.classList.toggle('image--favourite');
  }

  // hide non - favorites;
  hide() {
    this.imageElement.style.display = 'none';
  }

  // filter favorites
  isFavourite() {
    return this.imageElement.classList.contains('image--favourite');
  }
}

const images = imagePath.map(path => new Image(path));
images.forEach(image => image.show());

function filtered() {
  images
    .filter(image => !image.isFavourite())
    .forEach(image => image.hide());
}

favorites.addEventListener('click', () => filtered());
