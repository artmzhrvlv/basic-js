const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(array) {
    let maxDepth = 1;
    for (let  i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        let depth = 1;
        depth = depth + this.calculateDepth(array[i]);;
        if (depth > maxDepth) maxDepth = depth;
      }
    }
  return maxDepth;
}
}
