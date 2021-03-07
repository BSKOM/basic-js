const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(str, key) {
    let res = []
    let n = 0
    for (let i = 0; i < str.length; i++) {
      if ((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z')) {
        res += String.fromCharCode((str.toUpperCase().charCodeAt(i) - 'A'.charCodeAt(0) + key.toUpperCase().charCodeAt(n) - 'A'.charCodeAt(0)) % 26 + 'A'.charCodeAt(0))
        n = (n + 1) % key.length
      } else {
        res += str[i]
      }
    }
    return res
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(str, key) {
    let res = []
    let n = 0
    for (let i = 0; i < str.length; i++) {
      if ((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z')) {
        res += String.fromCharCode((str.charCodeAt(i) - key.toUpperCase().charCodeAt(n) + 26) % 26 + 'A'.charCodeAt(0))
        n = (n + 1) % key.length
      } else {
        res += str[i]
      }
    }
    return res
  }
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
}

module.exports = VigenereCipheringMachine;
