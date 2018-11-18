import image1 from './images/DSC05386.JPG';
import image2 from './images/DSC05389.JPG';
import image3 from './images/DSC05396.JPG';
import Image from './image.js'

const imagesWrapper = document.getElementById('images');
const favorites = document.getElementById('show-favourites');
const imagePath = [image1, image2, image3];


const images = imagePath.map(path => new Image(path));
images.forEach(image => image.show());

function filtered() {
  images
    .filter(image => !image.isFavourite())
    .forEach(image => image.hide());
}

favorites.addEventListener('click', () => filtered());
