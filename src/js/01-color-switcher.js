const elementEl = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};
elementEl.btnStart.addEventListener('click', onBtnStart);
elementEl.btnStop.addEventListener('click', onBtnStop);
function onBtnStart() {
  elementEl.btnStart.setAttribute('disabled', 'true');
  elementEl.btnStop.removeAttribute('disabled');
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
  console.log(timerId);
}
function onBtnStop() {
  elementEl.btnStop.setAttribute('disabled', 'true');
  elementEl.btnStart.removeAttribute('disabled');
  clearInterval(timerId);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
