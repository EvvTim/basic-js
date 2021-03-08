const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  // remove line with error and write your code here
  let cats = []
  let mergedArr = [].concat.apply([],arr)

  for (let i = 0; i <= mergedArr.length; i++) {
    if (mergedArr[i] === '^^') {
      cats.push(i)
    } else {
      return 0
    }
  }

  return cats.length

};
