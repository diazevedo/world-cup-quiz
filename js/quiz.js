const QUESTIONS_TO_THE_USER = QUESTIONS.sort(function () {
  return 0.5 - Math.random();
});

var USER_CORRECT_ANSWERS = 0;

document.addEventListener("DOMContentLoaded", function () {
  var current_question = 0;
  setQuestionAndOptions(
    QUESTIONS_TO_THE_USER[current_question].question,
    QUESTIONS_TO_THE_USER[current_question].options,
    QUESTIONS_TO_THE_USER[current_question].image
  );

  const $form = document.querySelector("form");
  $form.addEventListener("submit", function (event) {
    event.preventDefault();
    const $userAnswer = document.querySelector("input:checked");

    if (!$userAnswer) {
      document.querySelector(".error-message").style.display = "block";
      return;
    }

    if (current_question === 4) {
      document.querySelector(".form-answers-result").style.display = "block";
    } else {
      document.querySelector(".form-answers-next-question").style.display =
        "block";
    }

    document.querySelector(".error-message").style.display = "none";
    disable_form();

    const $correctAnswerText = document.querySelector(".correct-answer-text");
    const $wrongAnswerText = document.querySelector(".wrong-answer-text");
    const userOption = $userAnswer.value;

    document
      .querySelector(
        `[data-answer="${QUESTIONS_TO_THE_USER[current_question].answer}"]`
      )
      .classList.add("correct");

    const isAnswerCorrect =
      userOption === QUESTIONS_TO_THE_USER[current_question].answer;

    if (isAnswerCorrect) {
      USER_CORRECT_ANSWERS++;

      $correctAnswerText.style.display = "block";
      document.querySelector(".title").style.display = "none";
    } else {
      document
        .querySelector(`[data-answer="${userOption}"]`)
        .classList.add("incorrect");
      $wrongAnswerText.style.display = "block";
      document.querySelector(".title").style.display = "block";
      document.querySelector(".correct-answer-span").textContent =
        QUESTIONS_TO_THE_USER[current_question].answer;
    }

    document.querySelector(".explanation").style.display = "block";
    document.querySelector(".answer-text").textContent =
      QUESTIONS_TO_THE_USER[current_question].explanation;
  });

  document
    .querySelector(".form-answers-next-question")
    .addEventListener("click", function () {
      current_question++;
      setQuestionAndOptions(
        QUESTIONS_TO_THE_USER[current_question].question,
        QUESTIONS_TO_THE_USER[current_question].options,
        QUESTIONS_TO_THE_USER[current_question].image
      );
      document.querySelector(".explanation").style.display = "none";
      document.querySelector(".form-answers-next-question").style.display =
        "none";

      unable_form();
      const $incorrectOption = document.querySelector(".incorrect");
      if ($incorrectOption) {
        $incorrectOption.classList.remove("incorrect");
      }

      const $correctOption = document.querySelector(".correct");
      if ($correctOption) {
        console.log(document.querySelectorAll(".correct"));
        console.log("correct", $correctOption);
        $correctOption.classList.remove("correct");
      }

      document.querySelector("input:checked").checked = false;
      document.querySelector(".correct-answer-text").style.display = "none";
      document.querySelector(".wrong-answer-text").style.display = "none";
    });

  document
    .querySelector(".form-answers-result")
    .addEventListener("click", function (event) {
      event.preventDefault();

      var highScores = [];
      currentPlayer = JSON.parse(
        localStorage.getItem("world-cup-current-player")
      );

      currentPlayer.score = USER_CORRECT_ANSWERS;
      if (localStorage.getItem("world-cup-high-scores")) {
        highScores = JSON.parse(localStorage.getItem("world-cup-high-scores"));
      }

      highScores.push(currentPlayer);
      console.log({ USER_CORRECT_ANSWERS, currentPlayer, highScores });

      highScores.sort(function (current, next) {
        return current.score >= next.score;
      });

      highScores = highScores.slice(1, 6);

      localStorage.setItem("world-cup-high-scores", JSON.stringify(highScores));
      localStorage.setItem(
        "world-cup-current-player",
        JSON.stringify(currentPlayer)
      );

      window.location = "result.html";
    });
});

function setQuestionAndOptions(question, options, img) {
  document.querySelector(".game-image-quiz").src = `../assets/questions/${img}`;

  const $questionElement = document.querySelector("#question");
  const $options = document.querySelectorAll(".answer-option");

  $questionElement.textContent = question;

  for (let i = 0; i < $options.length; i++) {
    $options[i].setAttribute("data-answer", options[i]);
    $options[i].querySelector("span").textContent = options[i];
    $options[i].querySelector("input").value = options[i];
  }
}

function unable_form() {
  const $form = document.querySelector("form");

  const inputs = $form.querySelectorAll(".with-gap");
  const button = $form.querySelector(".form-answers-button");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
  }

  button.disabled = false;
}

function disable_form() {
  const $form = document.querySelector("form");

  const inputs = $form.querySelectorAll(".with-gap");
  const button = $form.querySelector(".form-answers-button");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }

  button.disabled = true;
}
