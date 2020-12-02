document.addEventListener("DOMContentLoaded", function () {
  const highScores = getHighScores();

  if (highScores.length === 0) {
    document.querySelector(".no-high-score").style.display = "block";
    document.querySelector(".score-table").style.display = "none";
  } else {
    document.querySelector(".no-high-score").style.display = "none";
    document.querySelector(".score-table").style.display = "table";
    addRowsToTable(highScores);
  }
});

function getHighScores() {
  var highScores = [];

  if (localStorage.getItem("world-cup-high-scores")) {
    highScores = JSON.parse(localStorage.getItem("world-cup-high-scores"));
  }

  return highScores;
}

function addRowsToTable(players) {
  const $tbody = document.querySelector(".score-table tbody");

  for (let i = 0; i < players.length; i++) {
    let tr = document.createElement("tr");
    let tdPosition = document.createElement("td");
    tdPosition.textContent = i + 1 + "º";
    let tdName = document.createElement("td");
    tdName.textContent = players[i].name;

    let tdScore = document.createElement("td");
    tdScore.textContent = players[i].score;

    let tdDate = document.createElement("td");
    tdDate.textContent = new Date(players[i].date).toLocaleDateString();

    tr.appendChild(tdPosition);
    tr.appendChild(tdName);
    tr.appendChild(tdScore);
    tr.appendChild(tdDate);

    $tbody.appendChild(tr);
  }
}
