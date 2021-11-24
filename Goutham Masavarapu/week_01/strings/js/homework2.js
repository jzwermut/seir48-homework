// # Strings
//
// These exercises will test your knowledge of string functions, conditionals, and arrays.
// For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// ## DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount,
// and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```
//
const DrEvil = function (amount) {
        if (amount == 1000000) {
      return `${amount}  dollars (pinky)`;
      } else {
        return `${amount}  dollars`;
      }

};

console.log(DrEvil(10));
console.log(DrEvil(1000000));
// ## MixUp
//
// Create a function called mixUp. It should take in two strings,
// and return the concatenation of the two strings (separated by a space) slicing out
 // and swapping the first 2 characters of each. You can assume that the strings are
 // at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```
//
const mixUp = function (string1, string2) {
   return string2.slice(0, 2) + string1.slice(2) + " " + string1.slice(0, 2) + string2.slice(2);

// array.slice(start, end)
// slice() extracts the text from one string and returns a new string.
// Changes to the text in one string do not affect the other string.
//
// slice() extracts up to but not including endIndex.
// str.slice(1, 4) extracts the second character through the fourth character (characters indexed 1, 2, and 3).

// As an example, str.slice(2, -1) extracts the third character through the second to last character in the string.
};

console.log(mixUp('miz', 'podd'));
// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string,
// and return a version where all occurences of its first character have been
// replaced with '*', except for the first character itself.
// You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
//
const fixStart = function (string) {
    var ch = string.charAt(0);
    // string.charAt(index)- to access specific part of the string
    var ss = string.slice(1);
     let newText = ss.replace("ch", "*");
    return `${ch} newText`;
};

console.log(fixStart('babble'));

// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end, unless it
 // already ends in 'ing', in which case it should add 'ly' instead.
 // If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```
//

const verbing = function (string) {
        if (string.length < 3) {
            return string;
        }
        if (string.slice(-3) === 'ing') {
        return `${string}ly`;
        } else {
        return `${string}ing`;
        }
};

console.log(verbing('swim'));
// ## Not Bad
//
// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
// substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
//
// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```
const notBad = function (sentence) {
      const notIndex = sentence.indexOf('not');
       const badIndex = sentence.indexOf('bad');

      if(notIndex=== -1 || badIndex === -1){
        return sentence;
      }
      else {
        return  sentence.slice(0, notIndex) + 'good' + sentence.slice(badIndex + 3);;
        // returs the first element until the not shows up
        // good will be added when bad appears taking out 3 characters
      }


};

console.log(notBad('This dinner is not that bad!'));
