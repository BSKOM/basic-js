const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  return ['winter', 'spring', 'summer', 'autumn'][Math.floor(((date.getMonth()+1) / 12 * 4)) % 4]
};
