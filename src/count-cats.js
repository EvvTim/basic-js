const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let cats = []
  let mergedArr = [].concat.apply([],arr)

  mergedArr.map((el) => el === "^^" ? cats.push(el) : false)

  return cats.length
}

