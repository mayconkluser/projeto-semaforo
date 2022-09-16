const img = document.getElementById("img"),
  buttons = document.getElementById("buttons");

let colorIndex = 0,
  intervalId = null;

const trafficLight = (event) => {
  stopAutomatic();
  turnOn[event.target.id]();
};

const nextIndex = () => {
  colorIndex = colorIndex < 2 ? ++colorIndex : 0;
};

const changeColor = (event) => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
};

const stopAutomatic = () => {
  clearInterval(intervalId);
};

const turnOn = {
  red: () => (img.src = "./img/vermelho.png"),
  yellow: () => (img.src = "./img/amarelo.png"),
  green: () => (img.src = "./img/verde.png"),
  automatic: () => (intervalId = setInterval(changeColor, 3000)),
};

buttons.addEventListener("click", trafficLight);
