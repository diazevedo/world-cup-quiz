$.addEventListener("DOMContentLoaded", function () {
  const highScores = getHighScores();

  if (highScores.length === 0) {
    $.querySelector(".no-high-score").style.display = "block";
    $.querySelector(".score-table").style.display = "none";
  } else {
    $.querySelector(".no-high-score").style.display = "none";
    $.querySelector(".score-table").style.display = "table";
    addRowsToTable(highScores);
  }
});

/**
 * Adds row to the highest scores table
 * @param {Array} players  an array of objects: [{name: 'string', score:"integer", date: 'unix_timestamp'}]
 * @return {void}
 */
function addRowsToTable(players) {
  const $tbody = $.querySelector(".score-table tbody");

  for (let i = 0; i < players.length; i++) {
    let tr = $.createElement("tr");
    let tdPosition = $.createElement("td");
    tdPosition.textContent = i + 1 + "º";
    let tdName = $.createElement("td");
    tdName.textContent = players[i].name;

    let tdScore = $.createElement("td");
    tdScore.textContent = players[i].score;

    let tdDate = $.createElement("td");
    tdDate.textContent = new Date(players[i].date).toLocaleDateString();

    tr.appendChild(tdPosition);
    tr.appendChild(tdName);
    tr.appendChild(tdScore);
    tr.appendChild(tdDate);

    $tbody.appendChild(tr);
  }
}
