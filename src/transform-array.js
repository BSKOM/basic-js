const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = []
  if (!arr.length) return arr
  if (Array.isArray(arr) && arr.constructor === Array) {
    if (!(arr.includes('--discard-next') || arr.includes('--discard-prev') || arr.includes('--double-next') || arr.includes('--double-prev'))) return arr
    for (let i = 0; i < arr.length;) {
      if (((arr[i] === '--discard-prev') && (i === 0))
        || ((arr[i] === '--discard-next') && (i === (arr.length - 1)))
        || ((arr[i] === '--double-prev') && (i === 0))
        || ((arr[i] === '--double-next') && (i === (arr.length - 1)))
      ) {
      } else if ((arr[i] === '--discard-next') && (arr[i + 2] === '--double-prev')) {
        i += 2
      } else if ((arr[i] === '--double-next') && (arr[i + 2] === '--double-prev')) {
        res.push(arr[i + 1])
        res.push(arr[i + 1])
        res.push(arr[i + 1])
        i += 2
      } else if ((arr[i] === '--discard-next') && (arr[i + 2] === '--discard-prev')) {
        i += 2
      } else if ((arr[i] === '--double-next') && (arr[i + 2] === '--discard-prev')) {
        res.push(arr[i + 1])
        i += 2
      }
      else {
        res.push(arr[i])
      }
      i += 1
    }
    return res
  }
};
