const numWords = require("num-words")

module.exports = function toReadable (number) {
  return numWords(number).replace('and ','');
}
