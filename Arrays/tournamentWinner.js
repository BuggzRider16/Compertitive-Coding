/*
-) There's an algorithms tournament taking place in which teams of programmers
  compete against each other to solve algorithmic problems as fast as possible.
  Teams compete in a round robin, where each team faces off against all other
  teams. Only two teams compete against each other at a time, and for each
  competition, one team is designated the home team, while the other team is the
  away team. In each competition there's always one winner and one loser; there
  are no ties. A team receives 3 points if it wins and 0 points if it loses. The
  winner of the tournament is the team that receives the most amount of points.
-
*/

function tournamentWinner(competitions, results) {
    const obj = {}
    let max = "", points = 0;
    for (let i = 0; i < results.length; i++) {
        const round = competitions[i]
        const position = results[i] ? 0 : 1
        if (obj[round[position]]) {
            obj[round[position]] += 3
        } else {
            obj[round[position]] = 3
        }
        if (obj[round[position]] > points) {
            max = round[position]
            points = obj[round[position]]
        }
    }
    return max
}

console.log(tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
], [0, 0, 1]))