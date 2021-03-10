const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options
  let s = ''
  for (let i = 1; i <= repeatTimes; i++) {
    s += String(str)
    for (let j = 1; j <= additionRepeatTimes; j++) {
      s += String(addition)
      if (j < additionRepeatTimes)
        s += String(additionSeparator)
    }
    if (i < repeatTimes) s += String(separator)
  }
  return s
};