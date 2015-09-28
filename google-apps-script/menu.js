/**
 * Adds a custom menu to the active spreadsheet, containing a single menu item.
 *
 * The onOpen() function, when defined, is automatically invoked whenever the
 * spreadsheet is opened.
 *
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */
function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  sheet.addMenu("BONUS", [
    {
      name: 'Geocode Selected Cells',
      functionName: 'geocodeSelectedCells',
    },
    {
      name: 'Get Edit URLs',
      functionName: 'assignEditUrls',
    },
    {
      name: 'Assign unique keys',
      functionName: 'assignUniqueKeys',
    },
    { 
      name: 'Send form to all',
      functionName: 'sendFormToAll',
    },
    { 
      name: 'Send form to specific',
      functionName: 'sendFormToSpecific'
    },
    {
      name: 'Recalculate distances sheet',
      functionName: 'buildDistancesSheet'
    },
    {
      name: 'Recalculate days sheet',
      functionName: 'buildDaysSheet'
    }
  ]);
};
