const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const controlSequences = [`--discard-next`, `--double-prev`, `--double-next`, `--discard-prev`]

  return arr.reduce((prev, curr, index) => {
    if (controlSequences.includes(curr)) return prev
    if (arr[index - 1] === controlSequences[0]) return prev
    if (arr[index - 1] === controlSequences[2]) {
      prev.push(curr, curr);
    } else {
      prev.push(curr);
    }
    if (arr[index + 1] === controlSequences[3]) prev.splice(prev.length - 1, 1)
    if (arr[index + 1] === controlSequences[1]) prev.push(curr)

    return prev;
  }, []);
}