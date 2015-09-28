// via https://productforums.google.com/forum/#!topic/docs/LSKKCR3VHC8

var formId = <<<<< REDACTED >>>>>

function assignEditUrls() {
  var form = FormApp.openById(formId);
    //enter form ID here

  var sheet = usersSheet

  var data = sheet.getDataRange().getValues();
  var urlCol = 8; // column number where URL's should be populated; A = 1, B = 2 etc
  var responses = form.getResponses();
  var timestamps = [], urls = [], resultUrls = [];
  
  for (var i = 0; i < responses.length; i++) {
    timestamps.push(responses[i].getTimestamp().setMilliseconds(0));
    urls.push(responses[i].getEditResponseUrl());
  }
  for (var j = 1; j < data.length; j++) {

    resultUrls.push([data[j][0]?urls[timestamps.indexOf(data[j][0].setMilliseconds(0))]:'']);
  }
  sheet.getRange(2, urlCol, resultUrls.length).setValues(resultUrls);  
}
