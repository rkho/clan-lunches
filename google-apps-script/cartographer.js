// via https://vilimpoc.org/blog/2013/07/11/google-spreadsheet-geocoding-macro/

function geocodeSelectedCells() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cells = sheet.getActiveRange();

  // Must have selected 3 columns (Location, Lat, Lng).
  // Must have selected at least 1 row.

  if (cells.getNumColumns() != 3) {
    Logger.log("Must select the Location, Lat, Lng columns.");
    return;
  }

  var addressColumn = 1;
  var addressRow;

  var latColumn = addressColumn + 1;
  var lngColumn = addressColumn + 2;

  var geocoder = Maps.newGeocoder().setRegion('us');
  var location;

  for (addressRow = 1; addressRow <= cells.getNumRows(); ++addressRow) {
    address = cells.getCell(addressRow, addressColumn).getValue();

    // Geocode the address and plug the lat, lng pair into the
    // 2nd and 3rd elements of the current range row.
    location = geocoder.geocode(address);

    // Only change cells if geocoder seems to have gotten a
    // valid response.
    if (location.status == 'OK') {
      lat = location["results"][0]["geometry"]["location"]["lat"];
      lng = location["results"][0]["geometry"]["location"]["lng"];

      cells.getCell(addressRow, latColumn).setValue(lat);
      cells.getCell(addressRow, lngColumn).setValue(lng);
    }
  }
};

// via http://www.geodatasource.com/developers/javascript
function distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var radlon1 = Math.PI * lon1/180
    var radlon2 = Math.PI * lon2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
}

function buildDistancesSheet() {
  var responses = _.indexBy(getResponses(), 'Private ID Key')
  var users = getUsers().filter(function (user) {return Object.keys(responses).indexOf(user.Key) > -1})
  var ids = _.pluck(users, 'Key')
  var distances = ids.map(function (id) {return responses[id][maxDistanceCol].split(' mi.')[0]})
   .map(function (distance) {return distance === "∞" ? 6 : distance})

  // calculate n x n matrix of distances apart
  var matrix = users.map(function (row, index) {
    var id = ids[index]
    return users.reduce(function (distances, column, colIndex) {
      if (index === colIndex) {
        return distances.concat(9999)
      }
      return distances.concat(distance(row.Lat, row.Lng, column.Lat, column.Lng))
    }, [id, distances[index]])
  })

  matrix.unshift([null, null].concat(distances))
  matrix.unshift([null, null].concat(ids))

  spreadsheet.getSheetByName('Distances').getRange(1, 1, matrix.length, matrix.length)
    .setNumberFormat('@').setValues(matrix) // set to plain text to avoid auto-conversion
}
