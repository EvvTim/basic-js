const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length
  },
  addLink(value) {
    this.chainArr.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (isNaN(+position) || position === '' || this.chainArr[position] === undefined) {
      this.chainArr = []
      throw Error()
    }

    this.chainArr.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chainArr.reverse()
    return this
  },
  finishChain() {
    let connector = this.chainArr.join('~~')
    this.chainArr = []
    return connector
  }
};

module.exports = chainMaker;
