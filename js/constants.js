// if (localStorage.getItem("world-cup-high-scores")) {
//   highScores = JSON.parse(localStorage.getItem("scores"));
// }

// localStorage.setItem("scores", JSON.stringify(highScores));

// const RESULTS = [{

// }];

// submitInitialsBtnEl.addEventListener("click", function () {
//   var initValue = initialsEl.value.trim();
//   if (initValue) {
//       var userScore = { username: initValue, userScore: score };
//       initialsEl.value = '';
//       if (localStorage.getItem("scores")) {
//           highScores = JSON.parse(localStorage.getItem("scores"));
//       }
//       highScores.push(userScore)
//       localStorage.setItem("scores", JSON.stringify(highScores));
//       hide(inputScoreEl);
//       renderHighScores();
//       reset();
//   }
// });

const CURRENT_PLAYER = {
  name: "",
  score: "",
  date: "",
};

const TOP_FIVE_PLAYERS = [{}];
