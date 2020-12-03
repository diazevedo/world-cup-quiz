var USER_CORRECT_ANSWERS = 0;

const $nextQuestionButton = $.querySelector(".form-answers-next-question");
const $seeResultButton = $.querySelector(".form-answers-result");
const $answerButton = $.querySelector(".form-answers-button");
const $correctAnswerText = $.querySelector(".correct-answer-text");
const $wrongAnswerText = $.querySelector(".wrong-answer-text");
const $title = $.querySelector(".title");
const $explanation = $.querySelector(".explanation");
const $timerEl = $.querySelector(".timer");

/**
 * add the action when the user clicks the asnwer button
 */
$answerButton.addEventListener("click", function (event) {
  event.preventDefault();
  stopTimer();
  manageQuizElementsAfterAnswer();
  disable_form();
});

/**
 * add the action when the user clicks the next question button
 */
$nextQuestionButton.addEventListener("click", function () {
  CURRENT_QUESTION++;

  setQuestionAndOptions(
    QUESTIONS_TO_THE_USER[CURRENT_QUESTION].question,
    QUESTIONS_TO_THE_USER[CURRENT_QUESTION].options,
    QUESTIONS_TO_THE_USER[CURRENT_QUESTION].image
  );

  enable_form();
  cleanQuestionPage();
  startTimer();
});

/**
 * add the action when the user clicks the see result button
 */
$seeResultButton.addEventListener("click", function (event) {
  event.preventDefault();
  CURRENT_QUESTION = 0;

  QUESTIONS_TO_THE_USER = selectQuestions();
  CURRENT_PLAYER.score = USER_CORRECT_ANSWERS;
  USER_CORRECT_ANSWERS = 0;
  CURRENT_PLAYER.date = +new Date();
  manageHighScores();
  setResultPage();
  hideElement($.querySelector(".quiz-section"));
  showElement($.querySelector(".result-section"));
  enable_form();
  cleanQuestionPage();
});

function enable_form() {
  const $form = $.querySelector(".form-answers");

  const inputs = $form.querySelectorAll(".with-gap");
  const button = $form.querySelector(".form-answers-button");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
  }

  button.disabled = false;
}

/**
 * disables the question page inputs
 * @return {void}
 */
function disable_form() {
  const $form = $.querySelector(".form-answers");

  const inputs = $form.querySelectorAll(".with-gap");
  const button = $form.querySelector(".form-answers-button");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }

  button.disabled = true;
}

/**
 * manipulates all the page question, resets the page state
 * @return {void}
 */
function cleanQuestionPage() {
  const $incorrectOption = $.querySelector(".incorrect");
  if ($incorrectOption) $incorrectOption.classList.remove("incorrect");

  const $correctOption = $.querySelector(".correct");

  if ($correctOption) $correctOption.classList.remove("correct");

  if ($correctAnswerText) $correctAnswerText.style.display = "none";

  $wrongAnswerText.style.display = "none";
  $.querySelector("input:checked").checked = false;
  $seeResultButton.style.display = "none";
  $explanation.style.display = "none";

  $explanation.style.display = "none";
  $nextQuestionButton.style.display = "none";
  $seeResultButton.style.display = "none";
  $.querySelector(".first-radio").checked = true;
}

/**
 * After the user answer it will be manipulate the interface
 * @return {void}
 */
function manageQuizElementsAfterAnswer() {
  const $userAnswer = $.querySelector("input:checked");
  const userOption = $userAnswer.value;

  if (CURRENT_QUESTION === 4) $seeResultButton.style.display = "block";
  else $nextQuestionButton.style.display = "block";

  $.querySelector(
    `[data-answer="${QUESTIONS_TO_THE_USER[CURRENT_QUESTION].answer}"]`
  ).classList.add("correct");

  const isAnswerCorrect =
    userOption === QUESTIONS_TO_THE_USER[CURRENT_QUESTION].answer;

  if (isAnswerCorrect) {
    USER_CORRECT_ANSWERS++;

    $correctAnswerText.style.display = "block";
    $title.style.display = "none";
  } else {
    $.querySelector(`[data-answer="${userOption}"]`).classList.add("incorrect");

    $wrongAnswerText.style.display = "block";
    $title.style.display = "block";
    $.querySelector(".correct-answer-span").textContent =
      QUESTIONS_TO_THE_USER[CURRENT_QUESTION].answer;
  }

  $explanation.style.display = "block";
  $.querySelector(".answer-text").textContent =
    QUESTIONS_TO_THE_USER[CURRENT_QUESTION].explanation;
  $.querySelector(".first-radio").checked = true;
}
