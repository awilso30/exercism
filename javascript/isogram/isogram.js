function Isogram(input) {
  input = input.toLowerCase();
  input = input.replace(/\s/g, '');
  input = input.replace(/[-]/g, '');
  this.isIsogram = function() {
    var isogram;
    for (var x = 0; x < input.length; x++) {
      for (var a = x + 1; a < input.length; a++) {
        if (input[x] == input[a]) {
          return false;
        } else {
          isogram = true;
        };
      };
    };
    return isogram;
  };
};

module.exports = Isogram;
