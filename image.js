export default class Image {
  constructor(path) {
    this.path = path;
  }

  // creating image

  show() {
    const image = document.createElement('img');
    image.setAttribute('src', this.path);
    image.addEventListener('click', () => this.markOrUnmarkAsFavourite());
    document.getElementById('images').appendChild(image);
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
