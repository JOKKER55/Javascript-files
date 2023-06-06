// main11b.js

var string1 = "I love JavaScript";
var string2 = "I'm a great programmer";

function compareStrings(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else {
    return str2;
  }
}

var result = compareStrings(string1, string2);
console.log(result);
