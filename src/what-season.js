const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date = 'empty') {
  if (date == 'empty') return 'Unable to determine the time of year!'
  if (date instanceof Date){
    if (Object.prototype.toString.call(date) !== '[object Date]') throw new error('Not date')
    return ['winter', 'spring', 'summer', 'autumn'][Math.floor(((date.getMonth() + 1) / 12 * 4)) % 4] 
  }
  throw new error('Not date')
}
