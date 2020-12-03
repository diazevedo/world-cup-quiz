QUESTIONS_TO_THE_USER = selectQuestions();

$.addEventListener("DOMContentLoaded", function () {
  /** initiation of responsive menu */
  var elems = document.querySelectorAll(".sidenav");
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

    hideElement($.querySelector(".welcome-section"));
    showElement($.querySelector(".quiz-section"));
  });

  const $linksToHighScore = $.querySelectorAll(".high-score-link");
  for (let i = 0; i < $linksToHighScore.length; i++) {
    $linksToHighScore[i].addEventListener("click", function (event) {
      event.preventDefault();

      if ($.querySelector(".active-page").classList.contains("quiz-section")) {
        resetQuestionPage();
      }

      hideElement($.querySelector(".active-page"));
      showElement($.querySelector(".high-scores-section"));
    });
  }

  /** add clicks to the menu links -- to home page */
  const $linksToHome = $.querySelectorAll(".home-link");
  for (let i = 0; i < $linksToHome.length; i++) {
    $linksToHome[i].addEventListener("click", function (event) {
      event.preventDefault();

      if ($.querySelector(".active-page").classList.contains("quiz-section")) {
        resetQuestionPage();
      }

      hideElement($.querySelector(".active-page"));
      showElement($.querySelector(".welcome-section"));
    });
  }

  $.querySelector(".link-logo").addEventListener("click", function (event) {
    event.preventDefault();

    /** cleaning the form if it is the active page */
    if ($.querySelector(".active-page").classList.contains("quiz-section")) {
      resetQuestionPage();
    }

    hideElement($.querySelector(".active-page"));
    showElement($.querySelector(".welcome-section"));
  });
});

/**
 * reset the form page after user clicks to change a page
 */
function resetQuestionPage() {
  stopTimer();
  cleanQuestionPage();
  enable_form();
  QUESTIONS_TO_THE_USER = selectQuestions();
  CURRENT_QUESTION = 0;
}
