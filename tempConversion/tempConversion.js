var ftoc = function(fTemp) {
  return Math.round(((fTemp - 32) * 5 / 9) * 10) / 10;
}

var ctof = function(cTemp) {
  return Math.round((9 * cTemp / 5 + 32) * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
