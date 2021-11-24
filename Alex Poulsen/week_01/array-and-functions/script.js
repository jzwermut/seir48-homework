// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = ( num1, num2 ) => {

  if ( num1 > num2 ) {
    return num1;
  }

  return num2;
}

// console.log(maxOfTwoNumbers( 1, 2 ));
// console.log(maxOfTwoNumbers( 2, 0 ));
// console.log(maxOfTwoNumbers( 10, 100 ));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = ( num1, num2, num3 ) => {
  const arr = []
  let max = null;
  arr.push( num1 );
  arr.push( num2 );
  arr.push( num3 );
  for ( let i = 0; i < arr.length; i++) {
    if( max === null || arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// console.log(maxOfThree( 1, 2, 3));
// console.log(maxOfThree( 3, 2, 1));
// console.log(maxOfThree( 0, 2, 5));

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isVowel = function( char ) {
  const vowels = [ 'a', 'e', 'i', 'o', 'u'];

  for ( let i = 0; i < vowels.length; i++ ) {

    if (char === vowels[i]) {
      return true;
    }

    return false;
  }
}

// console.log(isVowel('a'));
// console.log(isVowel('z'));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function( arr ) {

  let total = 0;

  for ( let i = 0; i < arr.length; i++ ) {
    total += arr[i];
  }
  return total;
}

const multiplyArray = function( arr ) {

  let total = 1;

  for ( let i = 0; i < arr.length; i++ ) {
    total *= arr[i];
  }
  return total;
}

// console.log(sumArray([1,2,3,4]));
// console.log(multiplyArray([1,2,3,4]));

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = str => {

  let newStr = '';

  for ( let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// console.log(reverseString("jag testar"));
// console.log(reverseString("palindrome"));
// console.log(reverseString('tattarrattat'));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = arr => {

  let maxLength = 0;

  for ( let i = 0; i < arr.length; i++) {

    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }
  return maxLength;
}

// console.log(findLongestWord(['three', 'long', 'tattarrattat']));

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function( arr, i ) {

  let newArr = [];

  for ( let index = 0; index < arr.length; index++ ) {

    if ( arr[index].length > i) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// console.log(filterLongWords(['three', 'long', 'tattarrattat', 'c', 'verylongword', 'no', 'the'], 4 ))
