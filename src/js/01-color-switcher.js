function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let colorInterval;

stopButton.disabled = true;
startButton.disabled = false;

function switchingButtons(...buttons) {
  buttons.forEach(function (button) {
    button.disabled = !button.disabled;
  });
}

function switchingColors(event) {
  if (event.target === startButton) {
    switchingButtons(startButton, stopButton);
    colorInterval = setInterval(
      () => (document.body.style.backgroundColor = `${getRandomHexColor()}`),
      1000
    );
  } else if (event.target === stopButton) {
    switchingButtons(startButton, stopButton);
    clearInterval(colorInterval);
  }
}

startButton.addEventListener('click', switchingColors);
stopButton.addEventListener('click', switchingColors);
