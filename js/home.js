document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".form-start").addEventListener("submit", function () {
    const $playerName = document.querySelector("#player-name");

    localStorage.setItem(
      "world-cup-current-player",
      JSON.stringify({
        name: $playerName.value,
        score: 0,
        date: "",
      })
    );
  });
});
