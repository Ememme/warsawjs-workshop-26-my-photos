const images = document.getElementById('images');
images.addEventListener('click', (event) => {
  let img = event.target;
  console.log('I was clicked');
  // event.target.classList.toggle('image--favourite');
  if (img.classList.contains('image--favourite')) {
    img.classList.remove('image--favourite');
  } else {
    img.classList.add('image--favourite');
  }
});
const imagePath = ['images/DSC05386.JPG', 'images/DSC05389.JPG', 'images/DSC05396.JPG'];


// imagePath.forEach((image) => {
//   const newImage = document.createElement('img');
//   newImage.setAttribute('src', image);
//   newImage.addEventListener('click', () => {
//     if (newImage.classList.contains('image--favourite')) {
//       newImage.classList.remove('image--favourite');
//     } else {
//       newImage.classList.add('image--favourite');
//     }
//   });
//   images.appendChild(newImage);
// });


imagePath.forEach((image) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', image);
  // newImage.addEventListener('click', () => newImage.classList.toggle('image--favourite'));
  images.appendChild(newImage);
});
