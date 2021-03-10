const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options
  let s = ''
  for (let i = 1; i <= repeatTimes; i++) {
    s += String(str)
    if (i < repeatTimes) s += String(separator)
  }
  return s
};
  