export function displayFinalScore(score, possibleScore) {
  let message = "";
  if (score === possibleScore) {
    message = "Congratulations on a perfect score! Have you done this before?..."
  } else if (score >= (possibleScore / 4) * 3) {
    message = "Pretty good! A perfect score is well within reach."
  } else if (score >= (possibleScore / 4) * 2) {
    message = "Looks like you could use a little practice. Give it another go!";
  } else if (score >= (possibleScore / 4)) {
    message = "Oof. Feeling a little sleepy, maybe?"
  } else {
    message = "Congratulations! I say this because you must have been trying to miss questions on purpose, and if so, you nailed it!"
  }
  let html = `
    <div class="display-wrapper display-final">
      <p class="score-display">Quiz complete! You scored <span class="bold">${score}</span> out of a possible <span class="bold">${possibleScore}</span> points! ${message}</p>
      <p class="score-display">If you'd like to play again, just click the PLAY AGAIN button below.</p>
      <button onclick="newGame()" class="game-button">PLAY AGAIN</button>
    </div>
  `;
  return html;
}

export function displayQuestion(displayData) {
  let answerChoices = "";
  for (let question of displayData.answerChoices) {
    answerChoices += `
      <div class="radio-wrapper">
        <input type="radio" id="${question}" name="question" value="${question}" class="radio-input"></input>
        <label for="${question}" class="radio-label">${question}</label>
      </div>
    `
  }
  let html = `
    <div class="display-wrapper">
      <p class="question-number">Question ${displayData.questionNumber} of ${displayData.quizLength}</p>
      <h1 class="question">
        ${displayData.question}
      </h1>
      <form onsubmit="processAnswer(event)" class="quiz-form">
        ${answerChoices}
        <button type="submit" class="game-button">Submit</button>
      </form>
    </div>`;
  return html;
}

export function displayAnswer(selections, userAnswer, game) {
  let answerChoices = "";
  let correctAnswer = game.lastQuestion.correct;
  if (userAnswer === correctAnswer) {
    for (let selection of selections) {
      if (selection.value === userAnswer) {
        answerChoices += `
          <div class="display-answer">
            <p class="correct-answer">
              ${selection.value}
            </p>
            <p class="correctness-label correct-answer">
              <i class="fas fa-check"></i>
            </p>
          </div>`
      } else {
        answerChoices += `<div class="display-answer"><p>${selection.value}</p></div>`;
      }
    }
  } else {
    for (let selection of selections) {
      if (selection.value === userAnswer) {
        answerChoices += `
          <div class="display-answer">
            <p class="incorrect-answer">
              ${selection.value}
            </p>
            <p class="correctness-label incorrect-answer">
              <i class="fas fa-times"></i>
            </p>
          </div>
        `
      } else if (selection.value === correctAnswer) {
        answerChoices += `
          <div class="display-answer">
            <p class="correct-answer">
              ${selection.value}
            </p>
            <p class="correctness-label correct-answer">
              <i class="fas fa-check"></i>
            </p>
          </div>
        `
      } else {
        answerChoices += `
          <div class="display-answer">
            <p>
              ${selection.value}
            </p>
          </div>
        `
      }
    }
  }
  let html = `
    <div class="display-wrapper">
      <p class="question-number">Question ${game.questionNumber} of ${game.quizLength}</p>
      <h1 class="question">
        ${game.lastQuestion.question}
      </h1>
      <div>
        ${answerChoices}
      </div>
      <button onclick="loadNext()">${game.quizLength === game.questionNumber ? "See My Score!" : "Next Question"}</button>
    </div>`;
  return html;
}