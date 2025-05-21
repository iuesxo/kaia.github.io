const images = [
  './images/1erimg.jpg',
  './images/2mimage.jpg',
  './images/3mimg.jpg'
];

let index = 0;
const imgDiv = document.querySelector('.img');

function changeBackground() {
  imgDiv.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

changeBackground(); 
setInterval(changeBackground, 1550);