function buildDaysSheet() {
  var responses = _.indexBy(getResponses(), 'Private ID Key')
  var users = getUsers().filter(function (user) {return Object.keys(responses).indexOf(user.Key) > -1})
  var ids = _.pluck(users, 'Key')
  var dayAbbrevs = {
    Monday: 'M',
    Tuesday: 'Tu',
    Wednesday: 'W',
    Thursday: 'Th',
    Friday: 'F'
  }
  var days = ids.map(function (id) {
    return responses[id][daysCol].split(', ')
    .map(function (day) {
      return dayAbbrevs[day]
    })
  })

  // calculate n x n matrix of days matching
  var matrix = users.map(function (row, rowIndex) {
    var id = ids[rowIndex]
    return users.reduce(function (matchingDays, column, colIndex) {
      if (rowIndex === colIndex) {
        return matchingDays.concat(null)
      }
      return matchingDays.concat(intersection(days[rowIndex], days[colIndex]).toString())
    }, [id, days[rowIndex].toString()])
  })

  matrix.unshift([null, null].concat(days.map(function (daysFree) {return daysFree.toString()})))
  matrix.unshift([null, null].concat(ids))

  spreadsheet.getSheetByName('Days').getRange(1, 1, matrix.length, matrix.length)
    .setNumberFormat('@').setValues(matrix) // set to plain text to avoid auto-conversion
}

function intersection(array1, array2) {
  return array1.filter(function (value) {
    return array2.indexOf(value) > -1
  })
}
