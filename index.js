import Game from "./game.js";
import { displayAnswer } from "./display.js";

const QUIZ_FILE = "./Apprentice_TandemFor400_Data.json";
const QUIZ_LENGTH = 10;

let game;
let quizBody = document.getElementById("quiz-body");

window.processAnswer = processAnswer;
window.newGame = newGame;
window.loadNext = loadNext;

document.getElementById("start-quiz").addEventListener("click", newGame);

async function newGame() {
  game = new Game(QUIZ_FILE, QUIZ_LENGTH);
  quizBody.innerHTML = await game.loadNewGame();
}

function loadNext() {
  quizBody.innerHTML = game.loadNext();
}

function processAnswer(event) {
  event.preventDefault();
  let answer = "";
  for (let elem of event.target.elements) {
    if (elem.checked) {
      answer = elem.value;
    }
  }
  if (answer === "") {
    return;
  }
  if (answer === game.lastQuestion.correct) {
    game.score += 1;
  }
  quizBody.innerHTML = displayAnswer(event.target.elements, answer, game);
}