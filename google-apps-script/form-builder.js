function createForm() {

  var form = FormApp.create('HR Clan Lunch preferences')
    .setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId())
    .setTitle('HR Clan 1-on-1 Lunch')
    .setDescription([
      'You\'ll be automagically paired with another grad based on your location and availability.',
      '',
      'For questions or comments, email ' + adminEmail,
    ].join('\n'))
    .setRequireLogin(false)

  form.addListItem().setRequired(true)
    .setTitle('How far are you willing to travel?')
    .setChoiceValues([
      '.25 mi. ~5 minute walk',
      '.5 mi. ~10 minute walk',
      '.75 mi. ~15 minute walk',
      '1 mi. ~20 minute walk',
      '2 mi. ~10 minute drive',
      '3 mi. ~15 minute drive',
      '5 mi. ~25 minute drive',
      '∞ mi. I won\'t let a little distance stop me',
    ])

  form.addCheckboxItem().setRequired(true)
    .setTitle('What days are you available next week?')
    .setHelpText('Aug 31 — Sept 4')
    .setChoiceValues([
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
    ])

  form.addTextItem().setRequired(true)
    .setTitle('Private ID Key')
    .setHelpText('This field should be autofilled from the link in your email. Reply if you need help.')

  form.setShowLinkToRespondAgain(false)
    .setAllowResponseEdits(true)
    .setConfirmationMessage([
      'Your response has been recorded.',
      '',
      'You should hear back about your pairing in the next few days.',
      'Thanks!',
    ].join('\n'))


}
