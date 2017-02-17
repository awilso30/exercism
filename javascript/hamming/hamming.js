//
// This is made entirely by me.. YAY!

var hamming = function(input) {};

hamming.prototype.compute = function(string1, string2) {
	var splitString1 = string1.split("");
	var splitString2 = string2.split("");
	var count = 0;

	if (splitString1.length !== splitString2.length) {
			throw new Error('DNA strands must be of equal length.');
	} else if (splitString1 == splitString2) {
		return 0;
	} else {
		for (var i = 0; i < splitString1.length; i++) {
			if (splitString1[i] !== splitString2[i]) {
				count++
				console.log(count);
			}
		}
		return count;
	}
}

module.exports = hamming;