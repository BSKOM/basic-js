const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  // throw new CustomError('Not implemented');
  if (!arr.length) return []

  if (Array.isArray(arr) && arr.constructor === Array) {
    if (!(arr.includes('--discard-next') || arr.includes('--discard-next') || arr.includes('--discard-next') || arr.includes('--discard-next'))) return arr
  }
  else throw error('Not array')
  // remove line with error and write your code here
};
