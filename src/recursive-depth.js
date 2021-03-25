const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) return 0

        let count = 1

        arr.forEach(item => {
            if (Array.isArray(item)) {
                let depth = this.calculateDepth(item) + 1

                if (count < depth) count = depth
            }
        })

        return count
    }
}
