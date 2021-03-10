const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length
  },
  addLink(value) {
    this.arr.push(`( ${value} )`)
    // this.arr.splice(index, 0, item);
    return this
  },
  removeLink(position) {
    if (Number.isInteger(position)) {
      if (!position || position > this.getLength()) {
        this.arr = []
        throw new error('errPos')
      }
      const index = position - 1
      this.arr.splice(index, 1)
      return this
    }
    this.arr = []
    throw new error('notIntPos')
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    const finChain = this.arr.join('~~')
    this.arr = []
    return finChain
  }
};

module.exports = chainMaker;
