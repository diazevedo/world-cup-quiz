const $image = document.querySelector(".img-result");

$.querySelector(".home-link").addEventListener("click", function (event) {
  event.preventDefault();
  hideElement($.querySelector(".active-page"));
  showElement($.querySelector(".welcome-section"));
});

$.querySelector(".play-again-link").addEventListener("click", function (event) {
  event.preventDefault();
  hideElement($.querySelector(".active-page"));

  setQuestionAndOptions(
    QUESTIONS_TO_THE_USER[CURRENT_QUESTION].question,
    QUESTIONS_TO_THE_USER[CURRENT_QUESTION].options,
    QUESTIONS_TO_THE_USER[CURRENT_QUESTION].image
  );

  showElement($.querySelector(".quiz-section"));
});
