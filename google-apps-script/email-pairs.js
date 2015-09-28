function groupPairs() {
  var pairCol = 'Wk2 pair'
  var pairedUsers = getUsers().filter(function (user) {
    var pair = user[pairCol]
    return pair && pair !== 'NA'// && pair !== 'No response'
  })

  var usersMap = _.indexBy(pairedUsers, 'Key')

  var alreadyPaired = {}
  var pairs = pairedUsers.reduce(function (pairs, user) {
    var pair = usersMap[user[pairCol]]

    if (pair[pairCol] !== user.Key) {
      Logger.log('Pair doesn\'t match: ' + user.Key)
      return pairs
    }
    if (!alreadyPaired[pair.Key]) {
      pairs.push([user, pair])
      alreadyPaired[user.Key] = true
    }

    return pairs
  }, [])

  pairs.forEach(emailPair)
}

function getPairDays(pair) {
  var responses = _.indexBy(getResponses(), 'Private ID Key')
  var days = pair.map(function(user) {
    return responses[user.Key][daysCol].split(', ')//.filter(function(day) {return day !== 'Monday'})
  })
  return intersection(days[0], days[1])
}

function emailPair(pair) {
  var emails = pair.map(function(user) {return user[emailCol]})
  var body = [
    'Hi ' + pair[0][nameCol] + ' and ' + pair[1][nameCol] + ',',
    '',
    'You\'ve been paired together for an HR Clan 1-on-1 lunch! Here are the days this week that you both said you\'re available:',
    ' — ' + getPairDays(pair).join(', ') + ' — ',
    '',
    'And here\'s the midpoint between your addresses, weighted by max travel distances',
    getWeightedMidpoint(pair),
    '',
    'Hope you two can figure out the rest from here! Let me know if you have any questions or comments.',
    '',
    'Have a great time!',
    '',
    '— David',
  ].join('\n')

  //Logger.log(emails)
  //Logger.log(body)

  GmailApp.sendEmail(emails, 'Your HR Clan 1-on-1 Lunch', body, {name: 'David Ernst', from: adminEmail})
}

function getWeightedMidpoint(pair) {
  var responses = _.indexBy(getResponses(), 'Private ID Key')

  var maxDistances = pair.map(function(user) {return responses[user.Key][maxDistanceCol].split(' mi.')[0]})
   .map(function (distance) {return distance === "∞" ? 6 : Number(distance)})

  var distancesSum = maxDistances.reduce(function (sum, value) {return sum + value}, 0)

  var normalizedDistances = maxDistances.map(function (value) {return value / distancesSum}).reverse() // reverse the weighting

  var lat = pair.reduce(function(sum, user, index) {
    return sum + (Number(user.Lat) * normalizedDistances[index])
  }, 0)
  var lng = pair.reduce(function(sum, user, index) {
    return sum + (Number(user.Lng) * normalizedDistances[index])
  }, 0)

  return 'http://maps.google.com/maps?z=12&t=m&q=loc:' + lat + '+' + lng
}
