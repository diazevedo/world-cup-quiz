document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(
    localStorage.getItem("world-cup-current-player")
  );

  const $image = document.querySelector(".img-result");

  if (currentUser.score === 5) {
    $image.src = "../assets/questions/passed.jpg";
    document.querySelector(".fail-message").style.display = "none";
    document.querySelector(".success-message").style.display = "block";
  } else {
    $image.src = "../assets/questions/fail.jpg";
    document.querySelector(".fail-message").style.display = "block";
    document.querySelector(".success-message").style.display = "none";
  }
  document.querySelector(".total-correct-answers-number").textContent =
    currentUser.score;
  document.querySelector(".total-wrong-answers-number").textContent =
    5 - currentUser.score;
});
