var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()

var usersSheet = spreadsheet.getSheetByName('Users')
var responseSheet = spreadsheet.getSheetByName('wk3 responses')
var pairCol = 'Wk3 pair'

var getData = _.memoize(function () {
  return usersSheet.getDataRange().getValues()
})

var getUsers = _.memoize(function() {
  return arraysToObjects(getData())
})

var getResponses = _.memoize(function () {
  return arraysToObjects(responseSheet.getDataRange().getValues())
})

function getColHeaders() {
  return getData()[0]
}

var nameCol = "What's your name?"
var emailCol = "What's your email?"
var addressCol = "What's your office address? (Include city)"
var maxDistanceCol = 'How far are you willing to travel?'
var daysCol = 'What days are you available next week?'
