$.addEventListener("DOMContentLoaded", function () {
  /** initiation of responsive menu */
  var elems = $.querySelectorAll(".sidenav");
  M.Sidenav.init(elems, {});

  /** handles the action in the first page. when user clicks on start button */
  $.querySelector("#submit-button").addEventListener("click", function () {
    const $playerNameInput = $.querySelector("#player-name");

    if ($playerNameInput.value.trim().length === 0) {
      $.querySelector("#player-name").classList.add("invalid");
      return;
    }

    $.querySelector("#player-name").classList.remove("invalid");

    setCurrentPlayer($playerNameInput.value);
    QUESTIONS_TO_THE_USER = selectQuestions($playerNameInput.value);

    hideElement($.querySelector(".welcome-section"));

    setQuestionAndOptions(
      QUESTIONS_TO_THE_USER[0].question,
      QUESTIONS_TO_THE_USER[0].options,
      QUESTIONS_TO_THE_USER[0].image
    );

    $playerNameInput.value = "";

    showElement($.querySelector(".quiz-section"));
    startTimer();
  });
});
