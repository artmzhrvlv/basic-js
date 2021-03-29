const CustomError = require("../extensions/custom-error");
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let solution = {turns: 0, seconds: 0};
  solution.turns = Math.pow(2, disksNumber) - 1;
  solution.seconds = Math.floor(solution.turns / turnsSpeed * 3600);
  return solution;
};
