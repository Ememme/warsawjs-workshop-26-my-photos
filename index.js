const images = document.getElementById('images');
const imagePath = ['images/DSC05386.JPG', 'images/DSC05389.JPG', 'images/DSC05396.JPG'];


// imagePath.forEach(function(image){
//   const newImage = document.createElement('img');
//   // debugger;
//   newImage.setAttribute('src', image);
//   images.appendChild(newImage);
// });

imagePath.forEach((image) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', image);
  images.appendChild(newImage);
});
