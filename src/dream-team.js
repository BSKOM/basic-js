const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  return members.map(item => item.trim()[0].toUpperCase()).sort().join('');
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
