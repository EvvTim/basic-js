const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let {
        repeatTimes = 1,
        separator = '+',
        addition = '',
        additionRepeatTimes = 1,
        additionSeparator = '|'
    } = options

    if (repeatTimes === undefined) return ''

    let separatorR = []
    let strR = []

    for (let i = 0; i < repeatTimes; i++) {
        strR.push(str)
    }

    for (let i = 0; i < additionRepeatTimes; i++) {
        separatorR.push(`${addition}`)
    }

    const addSeparatorStr = separatorR.join(additionSeparator)

    console.log(addSeparatorStr)
    console.log(separatorR)
    console.log(strR)

    strR = strR.map(el => el + addSeparatorStr)

    return strR.join(separator)

}
  