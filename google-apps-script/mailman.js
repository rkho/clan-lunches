var formId = <<<<< REDACTED >>>>>

function getPrefilledUrlForApiKey() {
  var form = FormApp.openById(formId)

  var items = form.getItems(FormApp.ItemType.TEXT)

  // Create a form response object, and prefill it
  var formResponse = form.createResponse();

  // Prefill the API Key question
  var keyResponse = items[0].asTextItem().createResponse('API_KEY')
  
  // Prefill the Name question
  var nameResponse = items[1].asTextItem().createResponse('NAME_FIELD')

  // Get prefilled form URL, ready to concat onto
  return formResponse.withItemResponse(keyResponse)
    .withItemResponse(nameResponse)
    .toPrefilledUrl()
    .split('NAME_FIELD').join('') // remove name placeholder
    .split('API_KEY')
}

// store link to Form as global so we don't need to look it up more than once
var prefilledFormLink

function sendForm(user) {

  var email = user[emailCol]

  prefilledFormLink = prefilledFormLink || getPrefilledUrlForApiKey()
  var link = prefilledFormLink[0] + user.Key + prefilledFormLink[1] + user[nameCol].replace(' ', '+')

  var body = [
    'Hi ' + user[nameCol] + ',',
    '',
    'Want to get lunch with a different HR alum? Me too.',
    '',
    'Please say when you\'re available by filling this out (by Thursday EOD): ',
    link,
    '',
    'This link is unique for you only, do not share it!',
    '',
    //'------------------------------------',
    //'',
    //'Also please check that this is the correct location for the office address you gave:',
    //'http://maps.google.com/maps?z=12&t=m&q=loc:' + user.Lat + '+' + user.Lng,
    '',
    'Reply if you need any help.',
    '',
    'Cheers,',
    '— David'
  ].join('\n')
  
  GmailApp.sendEmail(email, 'Pick your HR Clan 1-on-1 Lunch preferences', body, {name: 'David Ernst', from: adminEmail})
}

function testSendForm() {
  sendForm(getUsers()[7])
}

function sendFormToAll() {
  var input = Browser.msgBox('WARNING: This will send an email to all users.', Browser.Buttons.OK_CANCEL);
  
  if (input === 'ok') {
    getUsers().forEach(function (user) {
      sendForm(user);
      //Logger.log('you did it!')
    });
  }
}

function sendFormToSpecific() {
  var input = Browser.inputBox(
    'Email the Preferences form',
    'Which row in the Users list do you want to email?',
    Browser.Buttons.OK_CANCEL
  );

  // TODO: verify proper input: make sure it's an integer that corresponds to an existing student

  // Did user click "OK"?
  if (input === 'cancel') {
    return;
  }

  var row = parseInt(input, 10) - 2;
  sendForm(getUsers()[row]);
}
