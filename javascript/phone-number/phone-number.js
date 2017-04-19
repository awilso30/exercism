function PhoneNumber(input) {
  this.input = input;
  var cleanNumber = input.match(/\d+/g).join("");
  var number;

  if (cleanNumber.length == 10) {
    number = cleanNumber;
  } else if (cleanNumber.length == 11 && cleanNumber.charAt(0) == 1) {
    var truncCleanNumber = cleanNumber.slice(1, 11);
    number = truncCleanNumber;
  } else {
    number = '0000000000';
  }

  this.number = function() {
    return number;
  }

  this.areaCode = function() {
    var areaCode = number.slice(0, 3);
    return areaCode;
  }

  this.toString = function() {
    var phoneNumber;
    var truncNumber = this.number().slice(3, 11);
    var dashNumber = truncNumber.slice(0, 3) + '-' + truncNumber.slice(3, 11);
    phoneNumber = '(' + this.areaCode() + ') ' + dashNumber;
    return phoneNumber;
  }
}

module.exports = PhoneNumber;
