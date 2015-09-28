function arraysToObjects(arrayOfArrays) {
  // This function takes an array of arrays — such as the result of someSheet.getDataRange().getValues() — and transforms it
  // to an array of objects, where the first item in the array (column headers) are used as property names
  var headers = arrayOfArrays.shift();
  return arrayOfArrays.map(function (row) {
    return row.reduce(function (memo, value, index) {
      if (value) {
        memo[headers[index]] = value;
      }
      return memo;
    }, {});
  });
}
