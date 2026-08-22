const body = document.body;
const button = document.getElementById("buttonTest");
const circle = document.getElementById("circle");
const textTest = document.getElementById("textTest");
const cps = document.getElementById("cps")

let move = false;
let sInColor = false; // for time
let x = 0;
let clicks = 0;

if (!sInColor) {
  setTimeout(() => {
  document.documentElement.style.setProperty("--text-color", "#3B438700")}, 1000);
   sInColor = true;
}

button.addEventListener("click", () => {
  if (move) {
    circle.style.animation = "circleMoveReversed 0.6s linear forwards";
    circle.style.background = "#1D235D";
    button.style.animation = "sizeAnimButtonReversed 0.6s linear forwards";
    button.style.backgroundColor = "#00A0FF";
    button.style.boxShadow = "0 0 50px #005B91";
    body.style.setProperty("--color-1", "#090914");
    body.style.setProperty("--color-2", "#19193A");
    document.documentElement.style.setProperty("--text-color", "#3B4387FF");
    setTimeout(() => {
      document.documentElement.style.setProperty("--text-color", "#3B438700");
    }, 1000);
  }
  else {
    circle.style.animation = "circleMove 0.6s linear forwards";
    circle.style.background = "#005A07";
    button.style.animation = "sizeAnimButton 0.6s linear forwards";
    button.style.backgroundColor = "#00FF00";
    button.style.boxShadow = "0 0 50px #00F00090";
    body.style.setProperty("--color-1", "#091409");
    body.style.setProperty("--color-2", "#193A1A");
    document.documentElement.style.setProperty("--text-color", "#245B28FF");
    setTimeout(() => {
      document.documentElement.style.setProperty("--text-color", "#245B2800");
    }, 1000);
  }
  x += 1;
  textTest.textContent = "Clicks " + x;
  
  clicks += 1;
  
  move = !move;
});

setInterval(() => {
  cps.textContent = "CPS " + clicks;
  clicks = 0;
}, 1000);