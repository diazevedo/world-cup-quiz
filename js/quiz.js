var USER_CORRECT_ANSWERS = 0;

const $nextQuestionButton = $.querySelector(".form-answers-next-question");
const $seeResultButton = $.querySelector(".form-answers-result");
const $errorMessage = $.querySelector(".error-message");
const $answerButton = $.querySelector(".form-answers-button");
const $correctAnswerText = $.querySelector(".correct-answer-text");
const $wrongAnswerText = $.querySelector(".wrong-answer-text");
const $title = $.querySelector(".title");
const $explanation = $.querySelector(".explanation");

$answerButton.addEventListener("click", function (event) {
  event.preventDefault();

  const $userAnswer = $.querySelector("input:checked");

  if (!$userAnswer) {
    $errorMessage.style.display = "block";
    return;
  }

  if (CURRENT_QUESTION === 4) $seeResultButton.style.display = "block";
  else $nextQuestionButton.style.display = "block";

  $errorMessage.style.display = "none";
  disable_form();

  const userOption = $userAnswer.value;

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
});

$nextQuestionButton.addEventListener("click", function () {
  CURRENT_QUESTION++;

  setQuestionAndOptions(
    QUESTIONS_TO_THE_USER[CURRENT_QUESTION].question,
    QUESTIONS_TO_THE_USER[CURRENT_QUESTION].options,
    QUESTIONS_TO_THE_USER[CURRENT_QUESTION].image
  );

  unable_form();
  cleanQuestionPage();
});

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
  unable_form();
  cleanQuestionPage();
});

function unable_form() {
  const $form = $.querySelector(".form-answers");

  const inputs = $form.querySelectorAll(".with-gap");
  const button = $form.querySelector(".form-answers-button");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
  }

  button.disabled = false;
}

function disable_form() {
  const $form = $.querySelector(".form-answers");

  const inputs = $form.querySelectorAll(".with-gap");
  const button = $form.querySelector(".form-answers-button");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }

  button.disabled = true;
}

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
}
