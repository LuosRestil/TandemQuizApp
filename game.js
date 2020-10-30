// import myStr from "./testFile.js";
import {displayQuestion, displayFinalScore} from "./display.js";
import { shuffle } from "./utils.js";

class Game {
  score = 0;
  questionNumber = 0;
  lastQuestion = {};
  lastQuestionDisplay = {};

  constructor(quizFile, quizLength) {
    this.quizFile = quizFile;
    this.quizLength = quizLength;
  }

  async loadNewGame() {
    let jsonData = await fetch(this.quizFile);
    this.quizData = await jsonData.json();
    return this.loadNext();
  }

  loadNext() {
    this.questionNumber += 1;
    if (this.questionNumber <= this.quizLength) {
      return this.loadQuestion();
    } else {
      return this.loadFinalScore();
    }
  }

  loadQuestion() {
    let questionIndex = Math.floor(Math.random() * this.quizData.length);
    let question = this.quizData.splice(questionIndex, 1)[0];
    this.lastQuestion = question;
    let answerChoices = [];
    for (let option of question.incorrect) {
      answerChoices.push(option);
    }
    answerChoices.push(question.correct);
    answerChoices = shuffle(answerChoices);
    let displayData = {
      question: question.question,
      answerChoices: answerChoices,
      correctAnswer: question.correct,
      questionNumber: this.questionNumber,
      quizLength: this.quizLength
    }
    return displayQuestion(displayData);
  }

  loadFinalScore() {
    return displayFinalScore(this.score, this.quizLength);
  }
}

export default Game;