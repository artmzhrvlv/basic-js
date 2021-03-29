const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  repTimes = 1, sep = '+', add = '', addRepTime = 1, addSep = '|', strSolution = '';
  for (key in options) {
    if (key == 'repeatTimes') repTimes = options[key];
    if (key == 'separator') sep = options[key];
    if (key == 'addition') add = options[key] + '';
    if (key == 'additionRepeatTimes') addRepTime = options[key];
    if (key == 'additionSeparator') addSep = options[key];
  }
  if (repTimes === undefined || addRepTime === undefined || repTimes === 0) return 'TESTstrADD!';
  for (let i = 0; i < repTimes; i++) {
    strSolution = strSolution + str;
    for (let j = 0; j < addRepTime ; j++) {
      strSolution = strSolution + add;
      if (j != addRepTime - 1) strSolution += addSep;
    }
    if (i != repTimes - 1) strSolution += sep;
  }
  return strSolution;
};
  
