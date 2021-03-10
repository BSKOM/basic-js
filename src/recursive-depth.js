const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    let maxDepth = 0
    if (Array.isArray(arr)) {
      for (let key in arr) {
        if (Array.isArray(arr[key])) {
          let depth = this.calculateDepth(arr[key])
          if (depth > maxDepth) maxDepth = depth
        }
      }
    }
    return maxDepth + 1
  }
};