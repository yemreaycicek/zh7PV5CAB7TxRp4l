const body = document.body;
const audio = document.querySelector("[data-audio]");

body.addEventListener('click', () => {
  body.classList.toggle('on');
  audio.play();
});