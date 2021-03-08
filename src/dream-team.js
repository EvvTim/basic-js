const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {

    if(!Array.isArray(arr)) return false

    let teamArr = []

    arr.map(item => {
        if(typeof item  === 'string') teamArr.push(item[0].match(/[a-zA-Z]/).join('').toUpperCase())
    })

    return teamArr.sort().join('')
}
