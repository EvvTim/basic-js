const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
    if (Array.isArray(arr) === false) return false
    let newArr = []
    arr.map((el) => typeof el === "string" ? newArr.push(el.trim().charAt(0).toUpperCase()) : false)
    return newArr.length === 0 ? false : newArr.sort().join('')
}