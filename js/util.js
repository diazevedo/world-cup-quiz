/**
 * Sets the name of the current player
 * @param {string} name - name of the player
 * @return {void}
 */
function setCurrentPlayer(name) {
  CURRENT_PLAYER.name = name;
}

/**
 * shows an element
 * @param {DOM element} a DOM element
 * @return {void}
 */
function showElement(elem) {
  elem.style.display = "block";
  elem.classList.add("active-page");
}

/**
 * hide an element
 * @param {DOM element} a DOM element
 * @return {void}
 */
function hideElement(elem) {
  elem.style.display = "none";
  elem.classList.remove("active-page");
}

/**
 * returns 5 question to be shown to the user
 * @return {void}
 */
function selectQuestions() {
  let questions = QUESTIONS.sort(function () {
    return 0.5 - Math.random();
  });

  return questions.slice(0, 5);
}

/**
 *
 * @param {string} question question text
 * @param {Array} options possible answers to the question
 * @param {string} img image of the question
 */
function setQuestionAndOptions(question, options, img) {
  $.querySelector(".game-image-quiz").src = `./assets/questions/${img}`;

  const $questionElement = document.querySelector("#question");
  const $options = document.querySelectorAll(".answer-option");

  $questionElement.textContent = question;

  for (let i = 0; i < $options.length; i++) {
    $options[i].setAttribute("data-answer", options[i]);
    $options[i].querySelector("span").textContent = options[i];
    $options[i].querySelector("input").value = options[i];
  }
}

/**
 * returns the 5 highest scores
 * @return {Array} an array of objects: [{name: 'string', score:"integer", date: 'unix_timestamp'}]
 */
function getHighScores() {
  var highScores = [];

  if (localStorage.getItem("world-cup-high-scores")) {
    highScores = JSON.parse(localStorage.getItem("world-cup-high-scores"));
  }

  return highScores;
}

/**
 * saves the highest score to the localStorage
 * @param {*} highScores an array of objects: [{name: 'string', score:"integer", date: 'unix_timestamp'}]
 * @return {void}
 */
function saveHighScores(highScores) {
  localStorage.setItem("world-cup-high-scores", JSON.stringify(highScores));
}

/**
 * Access the current highest scores. Adds the current player's score.
 * sorts and manipulates if the score will be one of the top 5.
 * Then saves it to the localStorage by calling the saveHighScores
 * @return {void}
 */
function manageHighScores() {
  var highScores = getHighScores();

  highScores.push(CURRENT_PLAYER);

  highScores.sort(function (current, next) {
    return next.score - current.score;
  });

  const sliceArrayFrom = highScores.length > 5 ? 1 : 0;
  highScores = highScores.slice(sliceArrayFrom, 6);

  saveHighScores(highScores);
}

/**
 * manipulates the data to be shown in the result page
 */
function setResultPage() {
  if (CURRENT_PLAYER.score === 5) {
    $image.src = "./assets/questions/passed.jpg";
    $.querySelector(".fail-message").style.display = "none";
    document.querySelector(".success-message").style.display = "block";
  } else {
    $image.src = "./assets/questions/fail.jpg";
    $.querySelector(".fail-message").style.display = "block";
    $.querySelector(".success-message").style.display = "none";
  }

  $.querySelector(".total-correct-answers-number").textContent =
    CURRENT_PLAYER.score;

  $.querySelector(".total-wrong-answers-number").textContent =
    5 - CURRENT_PLAYER.score;
}

var secondsElapsed = 0;
var timeGiven = 5;
var interval = 0;

/**
 * starts the timer.
 * @return {void}
 */
function startTimer() {
  $timerEl.textContent = timeGiven;
  var secondsElapsed = 0;
  interval = setInterval(function () {
    secondsElapsed++;
    $timerEl.textContent = timeGiven - secondsElapsed;
    if (secondsElapsed >= timeGiven) {
      disable_form();
      stopTimer();
      manageQuizElementsAfterAnswer();
    }
  }, 1000);
}

/**
 * stops the timer.
 * @return {void}
 */
function stopTimer() {
  clearInterval(interval);
}
