import image1 from './images/DSC05386.JPG';
import image2 from './images/DSC05389.JPG';
import image3 from './images/DSC05396.JPG';
import Image from './image.js'

const imagesWrapper = document.getElementById('images');
const favorites = document.getElementById('show-favourites');
const uploadButton = document.getElementById('file-input');

const imagePath = [image1, image2, image3];


const images = imagePath.map(path => new Image(path));
images.forEach(image => image.show());

function filtered() {
  images
    .filter(image => !image.isFavourite())
    .forEach(image => image.hide());
}

favorites.addEventListener('click', () => filtered());
uploadButton.addEventListener('click', () => {
    images
        .filter(image => image.isFavourite())
        .forEach(image => image.hide());

});
uploadButton.onchange = () => {
  // uploadButton.files > sprawdzi czy nie jest undefined po drodze
    if (uploadButton.files && uploadButton.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // dodajemy e.target.result
        const newImg = new Image(e.target.result);
        imagePath.push(newImg);
        console.log(imagePath);
        newImg.show();
        };

        reader.readAsDataURL(uploadButton.files[0]);
    }
};

fetch('http://localhost:3000/photos')
  .then(response => response.json())
  .then((response) => {
    console.log(response);
      response
      .map(img => new Image(img.url))
      .forEach(img => img.show());
 });
