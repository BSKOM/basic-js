const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  // throw new CustomError('Not implemented');
  // if (!arr.length) return arr

  // if (Array.isArray(arr) && arr.constructor === Array) {
  //   if (!(arr.includes('--discard-next') || arr.includes('--discard-prev') || arr.includes('--double-next') || arr.includes('--double-prev'))) return arr
  //  }
  // else throw error('Not array')
  let res = []
  let i = 0
  if (!arr.length) return arr
  if (Array.isArray(arr) && arr.constructor === Array) {

    if (!(arr.includes('--discard-next') || arr.includes('--discard-prev') || arr.includes('--double-next') || arr.includes('--double-prev'))) return arr
    for (let value of arr) {
      if (((value === '--discard-prev') && (i === 0)) || ((value === '--discard-next') && i === (arr.length - 1)) || 
        ((value === '--double-prev') && (i === 0)) || ((value === '--double-next') && i === (arr.length - 1)) ) {
      } else {
        res.push(value)
      }
      i += 1
    }
    return res
  }

  else throw error('Not array')
  // remove line with error and write your code here
};
