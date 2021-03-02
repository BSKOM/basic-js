const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {  
  const s = ('!!' + matrix.flat(Infinity).join('!!!') + '!!').split('!^^!').length 
  return s ? s - 1 : s
};
