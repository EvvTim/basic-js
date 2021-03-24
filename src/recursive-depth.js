const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 0, count = []) {

        if (Array.isArray(arr)) {
            this.calculateDepth(depth + 1)

            arr.forEach(item => {
                if (Array.isArray(item)) {
                    this.calculateDepth(item, depth + 1, count)
                }
            })
        }

        count.push(depth)

        return count.length
    }
}