function BeerSong(input1, input2) {
    this.bottles = input1;
    this.verse = function(bottles) {

      if (bottles == 2) {
          return bottles + ' bottles of beer on the wall, ' + bottles + ' bottles of beer.\nTake one down and pass it around, ' + (bottles-1) + ' bottle of beer on the wall.\n';
      } else if (bottles == 1) {
          return bottles + ' bottle of beer on the wall, ' + bottles + ' bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
      } else if (bottles == 0) {
          return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
      } else {
          return bottles + ' bottles of beer on the wall, ' + bottles + ' bottles of beer.\nTake one down and pass it around, ' + (bottles-1) + ' bottles of beer on the wall.\n';
      }
    };

    this.sing = function(input1, input2) {
        var song = '';

        if (input1 === input2) {
            return this.verse(input1);
        } else if (!input2) {
            input2 === 0;
            writeSong(input1, input2);
        } else {
            writeSong(input1, input2);
        };

};

function writeSong(input1, input2) {
    for (var i = input1; i >= input2; i--) {
        if (i === 0) {
            song += this.verse(i);
        } else {
            song += this.verse(i) + '\n';
        }
    }
    return song;
}

module.exports = BeerSong;
