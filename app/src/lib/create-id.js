const randInt = (from = 100000, to = 200000) => parseInt(Math.random() * to - from) + from

module.exports = () =>
  `${randInt()}-${randInt()}-${randInt()}-${randInt()}`
