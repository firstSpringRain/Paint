let pixels = document.querySelectorAll('.pixel');
let pixelBox = document.querySelector('.pixels');
let colors = document.querySelectorAll('.color');
let clearButton = document.querySelector('.clear');

function createManyPixels() {
    let newPixel = document.createElement('div');
    newPixel.classList.add('pixel');
    pixelBox.appendChild(newPixel);
};

for (let i = 1; i < 5500; i++) {
    createManyPixels();
}

function changeClassSelected(evt) {
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    color.classList.remove('selected');
  }
  evt.target.classList.add('selected');
}

for (let color of colors) {
    color.addEventListener('click', changeClassSelected);
}

let pixel = pixelBox.children;
for (let i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener('click', function() {
        for (let color of colors) {
            let colorSelected = color.classList.contains('selected');
            if (colorSelected) {
                pixel[i].style.backgroundColor = color.dataset.color;
            }
        }
    });
    clearButton.addEventListener('click', function() {
        pixel[i].style.backgroundColor = 'white';
}); 
}

