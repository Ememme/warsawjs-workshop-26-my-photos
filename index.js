const images = document.getElementById('images');
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
    images.appendChild(image);
    // przypięcie do this
    this.imageElement = image;
  }

  // toggle favourites
  markOrUnmarkAsFavourite() {
    this.imageElement.classList.toggle('image--favourite');
  }
}

// imagePath.forEach((image) => {
//   const newImage = new Image(image);
//   newImage.show();
// });

imagePath.map(x => new Image(x)).forEach(image => image.show());
