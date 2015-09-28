function assignAllPairs() {
  // get all users with responses
  var responses = _.indexBy(getResponses(), 'Private ID Key')
  var ids = Object.keys(responses)

  var users = _.indexBy(getUsers()
    .filter(function (user) {
      return ~ids.indexOf(user.Key)
    })
    .map(function (user) {
      // join response days onto user
      user.days = responses[user.Key][daysCol].split(', ')

      // join response maxDistance onto user
      user.maxDistance = responses[user.Key][maxDistanceCol].split(' mi.')[0]
      if (user.maxDistance === "∞") {
        user.maxDistance = 6
      } else {
        user.maxDistance = Number(user.maxDistance)
      }

      // Make an array of previous pairs
      user.previous = [user['Wk1 pair']]

      return user
    }
  ), 'Key')


  // for each user, make an array of acceptable matches:
  var possibleMatches = ids.reduce(function (obj, id) {

    obj[id] = {id: id}

    // each potential match: {id: innerId, distance: distanceApart, days: intersectingDays}
    obj[id].matches = ids.reduce(function (acceptable, innerId) {

      // can't pair with themselves
      if (id !== innerId) {

        // don't repeat past weeks' pairings
        if (users[id].previous.indexOf(innerId) === -1) {

          // within acceptable distance
          var distanceApart = distance(users[id].Lat, users[id].Lng, users[innerId].Lat, users[innerId].Lng)
          if ( distanceApart < (users[id].maxDistance + users[innerId].maxDistance) ) {

            // with overlapping days
            var intersectingDays = intersection(users[id].days, users[innerId].days)
            if (intersectingDays.length > 0) {
              acceptable.push({id: innerId, distance: distanceApart, days: intersectingDays})
            }

          }

        }

      }

      return acceptable
    }, [])

    return obj
  }, {})


  var matches = {}

  _(possibleMatches)
    .sortBy(function (possible) {
        return possible.matches.length
      })
    .each(function (toMatch) {
      // start with the user with the least pairs available

      // skip if already paired
      if (matches[toMatch.id] !== undefined) {
        return
      }


      // // sort by distance
      // var acceptable = _.sortBy(toMatch.matches, 'distance')

      // sort by least available matches
      var acceptable = _.sortBy(toMatch.matches, function (pair) {
        return possibleMatches[pair.id].matches.length
      })

      // find the first acceptable match who isn't already paired
      var pair = _.find(acceptable, function (match) {
        return matches[match.id] === undefined
      })

      // record the pairing
      if (pair === undefined) {
        matches[toMatch.id] = 'NA'
      } else {
        matches[toMatch.id] = pair.id
        matches[pair.id] = toMatch.id
      }
    })
    .value() // to get the lazy-execution to start

  return matches
}

function savePairs() {
  var pairCol = getColHeaders().indexOf('Wk2 pair') + 1

  _.each(assignAllPairs(), function (pairKey, userKey) {
    var row = _.findIndex(getUsers(), function (user) {
      return user.Key === userKey
    }) + 2
    usersSheet.getRange(row, pairCol).setNumberFormat('@') // set to plain text to avoid auto-conversion
      .setValue(pairKey.toString())
  })

}
