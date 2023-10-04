function climbingLeaderboard(rankedScores, newScores) {
  let result = [];
  let uniqueScores = [...new Set(rankedScores)];
  for (const score of newScores) {
    if (score >= uniqueScores[0]) {
      result.push(1);
    } else if (score < uniqueScores[uniqueScores.length - 1]) {
      result.push(uniqueScores.length + 1);
    } else {
      result.push(rankUsingBinarySearch(score, uniqueScores));
    }
  }
  return result.sort((a,b) => {return b-a})
}
function rankUsingBinarySearch(score, uniqueScores) {
  let start = 0;
  let end = uniqueScores.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (uniqueScores[mid] === score) {
      return mid + 1;
    } 
    else if (uniqueScores[mid] > score && uniqueScores[mid + 1] < score) {
      return mid + 2;
    } 
    else if (uniqueScores[mid] < score && uniqueScores[mid - 1] > score) {
      return mid - 1;
    }
    else if (score < uniqueScores[mid]) {
      start = mid + 1;
    } 
    else {
      end = mid - 1;
    }
  }
}
console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 40, 50,120])) //output -> 6 3 2 1