let usedWords = [];

function getRandomWord() {
  while (true) {
    let randomIndex = Math.floor(Math.random() * wordsList.length);
    if (!usedWords.includes(randomIndex)) {
      usedWords.push(randomIndex);
      return randomIndex;
    }
    if (usedWords.length == wordsList.length) {
      alert("Oyun Bitti");
    }
  }
}

let passCounter = 3;
let wordCounter = getRandomWord();
document.getElementById("pass").addEventListener("click", () => {
  if (passCounter != 0) {
    wordCounter = getRandomWord();
    passCounter--;
    changeWord();
    let passTextElement = document.getElementById("remainingPass");
    passTextElement.innerText = "Pas" + "\n" + passCounter;
  }
});

let pointCounter = 0;
document.getElementById("true").addEventListener("click", () => {
  if (pointCounter < wordsList.length) {
    wordCounter = getRandomWord();
    pointCounter++;
    changeWord();

    let pointTextElement = document.getElementById("point");
    pointTextElement.innerText = "Puan" + "\n" + pointCounter;
  }
});
let passValue = localStorage.getItem("passCount");

let passTextElement = document.getElementById("remainingPass");
passTextElement.innerText += "\n" + passValue;

let pointTextElement = document.getElementById("point");
pointTextElement.innerText += "\n" + pointCounter;

document.getElementById("taboo").addEventListener("click", () => {
  wordCounter = getRandomWord();
  pointCounter--;
  changeWord();
  let pointTextElement = document.getElementById("point");
  pointTextElement.innerText = "Puan" + "\n" + pointCounter;
});

document.getElementById("popup").addEventListener("click", () => {
  window.location.replace("index.html");
});

document.getElementById("goBack").addEventListener("click", () => {
  Swal.fire({
    title: "Oyundan çıkmak istediğinize emin misiniz?",
    //text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Evet",
    cancelButtonText: "Hayır",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.replace("index.html");
    }
  });
});

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerText = "Süre" + "\n" + minutes + ":" + seconds;

    if (timer == 0) {
      let popup = document.getElementById("popup");
      popup.style.display = "block"; //jsden css değiştirmek içi
      document.getElementById("true").disabled = true;
      document.getElementById("pass").disabled = true;
      document.getElementById("taboo").disabled = true;
    } else {
      --timer;
    }
  }, 1000);
}
let timeValue = localStorage.getItem("timeCount");
let display = document.getElementById("remainingTime");
startTimer(timeValue - 1, display);
var timer = timeValue,
  minutes,
  seconds;
minutes = parseInt(timer / 60, 10);
seconds = parseInt(timer % 60, 10);

minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

display.innerText = "Süre" + "\n" + minutes + ":" + seconds;

function changeWord() {
  const currentWord = wordsList[wordCounter];
  let word = document.getElementsByClassName("word")[0];
  let tabooWordsElements = document.getElementsByClassName("tabooWordClass");

  word.innerText = currentWord.word;
  for (let i = 0; i < tabooWordsElements.length; i++) {
    tabooWordsElements[i].innerText = currentWord.tabooWords[i];
  }
}
changeWord();
