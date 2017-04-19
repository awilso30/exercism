function whatIsInAName(collection, source) {
// What's in a name?
var arr = [];
// Only change code below this line

var keys = Object.keys(source);
console.log(source);
console.log(keys);
console.log(keys[0]);
console.log(source[keys[0]]);

for (var i = 0 ; i < keys.length; i++) {
  for (var j = 0 ; j < collection.length; j++) {
    if (collection[j].hasOwnProperty(keys[i]) && collection[j][keys[i]] === source[keys[i]]) {
     //process if true
     console.log(collection[j]);

      arr.push(collection[j]);
    }
  }
}
  // Only change code above this line
  console.log('This is arr:');
  console.log(arr);
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
