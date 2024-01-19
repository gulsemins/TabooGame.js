document.getElementById("newGame").addEventListener("click", () => {
  window.location.replace("index.html");
});

let passText = document.getElementById("passText");

document.getElementById("myRange").addEventListener("input", (event) => {
  passText.innerText = "Pas: " + event.target.value;
});
let slider = document.getElementById("myRange");
document.getElementById("save").addEventListener("click", () => {
  localStorage.setItem("passCount", slider.value);
});

let timeText = document.getElementById("timeText");

document.getElementById("myTimeRange").addEventListener("input", (event) => {
  let value = event.target.value;

  let minutes = parseInt(value / 60, 10);
  let seconds = parseInt(value % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timeText.innerText = "Süre: " + minutes + ":" + seconds;
});
let value = 120;
let minutes = parseInt(value / 60, 10);
let seconds = parseInt(value % 60, 10);

minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

timeText.innerText = "Süre: " + minutes + ":" + seconds;
let timeSlider = document.getElementById("myTimeRange");

document.getElementById("save").addEventListener("click", () => {
  localStorage.setItem("timeCount", timeSlider.value);
});
