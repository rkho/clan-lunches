function getNAs(pairCol) {
  return getUsers().filter(function (user) {
    return user[pairCol] === 'NA'
  })
}

function emailNAs() {
  getNAs('Wk2 pair').forEach(function (user) {

    Logger.log(user[emailCol])
    var body = [
      'Hey ' + user[nameCol].split(' ')[0] + ',',
      '',
      'I\'m sorry, there weren\'t any other HR Clan 1-on-1 Lunch responses within range of your address this week. Thank you for trying' +
      ' it out nonetheless.',
      '',
      'Would you be interested in still being paired up over video chat? Let me know',
      '',
      'Hopefully more people nearby will join soon, so we can get you some more matches! You can invite other HR grads by ' +
      'sending them to this page:' + service.URL,
      '',
    ].join('\n')
    Logger.log(body)

    GmailApp.sendEmail(user[emailCol], 'HR Clan 1-on-1 lunch— no pair this week', body, {name: 'David Ernst', from: adminEmail})
  })

}
