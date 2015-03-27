module.exports = function blacklist(object, filter) {
  var copy = {}

  for (var key in object) {
    // blacklist?
    if (!filter[key]) continue

    copy[key] = object[key]
  }

  return copy
}
