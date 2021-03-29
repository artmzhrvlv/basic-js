const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position === NaN || position >= this.getLength() || position < 0)
    {
      this.chain = [];
      throw new Error();
    } else 
    {
      this.chain.splice(position - 1, 1)
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let resultChain = '';
    this.chain.forEach((item, index) => {
      if (index == 0) resultChain += `( ${item} )`;
      else resultChain += `~~( ${item} )`;
    });
    this.chain = [];
    return resultChain;
  }
};

module.exports = chainMaker;
