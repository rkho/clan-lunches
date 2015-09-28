function assignUniqueKeys() {
  var keyCol = getColHeaders().indexOf('Key') + 1
  getUsers().forEach(function makeKeyForRowsWithout(row, index) {
    if (!row.Key) {
      var rowNumber = index + 2 // acount for header row and zero indexing
      var newKey = SHA1(row.Timestamp + row.Name, 8)
      usersSheet.getRange(rowNumber, keyCol).setNumberFormat('@') // set to plain text to avoid auto-conversion
        .setValue(newKey.toString())
      Logger.log("Key for " + row.Name + ": " + newKey)
    }
  })
}


/**
 * Generates a SHA-1 hash.
 *
 * @param {string} input The input string value to compute a digest for.
 * @param {number} length (Optional) Concatenate the result down to this length.
 * @return The input string hashed with a SHA-1 algorithm.
 * @customfunction
 */
function SHA1(input, length) {
  var rawHash = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_1, input);
  var txtHash = '';
  var j;
  var hashVal;
  for (j = 0; j < rawHash.length; j++) {
    hashVal = rawHash[j];
    if (hashVal < 0) {
      hashVal += 256;
    }
    if (hashVal.toString(16).length === 1) {
      txtHash += "0";
    }
    txtHash += hashVal.toString(16);
  }
  if (length) {
    return txtHash.slice(0, length);
  }
  return txtHash;
}
