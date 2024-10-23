const container = document.querySelector('.container');

function createBox() {
  let clientWidth =  parseInt(Math.ceil((document.body.clientWidth / 32))); 
  let clientHeight =  parseInt(Math.ceil((document.body.clientHeight / 32))); 
  let boxCount = clientWidth * clientHeight;

  for (let i = 1; i <= boxCount; i++) {
    let box = document.createElement('span');

    box.classList.add('box');
    container.appendChild(box);
  };
};

function createRandomColor() {
  let hexValue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let boxes = document.querySelectorAll('.box');

  boxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
      let color = '#';

      for (let i = 0; i < 6; i++) {
        color += hexValue[Math.floor(Math.random() * hexValue.length)];
      }
      box.style.background = color;
      console.log(`%c${color}`, `background: ${color}`);

    });
  });
};

createBox();
window.addEventListener('resize', () => {
  container.innerHTML = '';
  createBox();
  createRandomColor();
});
createRandomColor();

