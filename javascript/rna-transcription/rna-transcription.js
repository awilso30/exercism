//
// This is made entirely by me.. YAY!

var DnaTranscriber = function(input) {};

DnaTranscriber.prototype.toRna = function(input) {
	var tempStringArray = [];

		if (input.includes("X")) {
			throw new Error('Invalid input');
		} else if (input.length == 1) {
			if (input == "C") {					
				return "G";
			} else if (input == "G") {			
				return "C";
			} else if (input == "A") {			
				return "U";
			} else if (input == "T") {			
				return "A";
			}	
	} else {		
		for (var i = 0; i < input.length; i++) {
			if (input[i] == "C") {	
				tempStringArray.push("G");							
			} else if (input[i] == "G") {
				tempStringArray.push("C");			
			} else if (input[i] == "A") {
				tempStringArray.push("U");			
			} else if (input[i] == "T") {
				tempStringArray.push("A");			
			}
		}			
	}
	var convertedString = tempStringArray.join("");
	return convertedString;
}

module.exports = DnaTranscriber;