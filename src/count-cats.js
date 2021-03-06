const CustomError = require("../extensions/custom-error");

module.exports = (matrix) => ('!!^^!!' + matrix.flat(Infinity).join('!!') + '!!').split('!^^!').length - 2
