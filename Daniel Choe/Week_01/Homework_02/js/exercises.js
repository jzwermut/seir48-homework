// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns
// the largest of them. Use the if-then-else construct available in Javascript.
// You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (a,b){
  if (a > b){
    return a;
  } else {
    return b;
  }
}

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (a,b,c){
  if (a > b && a > c){
    return a;
  } if (b > a && b > c){
    return b;
  } if (c > a && c > b){
    return c;
  }
}

// 3. Write a function that takes a character (i.e. a string of length 1) and
//returns true if it is a vowel, false otherwise.

const vowelTest = function (z) {
  if (z === 'a'){
    console.log('True');
  } else if (z === 'e'){
    console.log('True');
  } else if (z === 'i'){
    console.log('True');
  } else if (z === 'o'){
    console.log('True');
  } else if (z === 'u'){
    console.log('True');
  } else {
    console.log('False');
  }
}
// probably a better way to do this, I tried using || but it would only return true for all parameters.

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively)
// all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10,
// and `multiplyArray([1,2,3,4])` should return 24.
//


const sumArray = function (a) {
  sum = 0;
  for (let i = 0; i < a.length ; i++){
    sum += a[i];
  }
  return(sum);
}

const multiplyArray = function (a) {
  multipliedResult = 1
  for (let i = 0; i < a.length; i++){
    multipliedResult = multipliedResult * a[i]
  }
  console(multipliedResult);
}


// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example,
// reverseString("jag testar") should return the string "ratset gaj".

// const revString = function (a) {
//   newString = ''
//   for (let i = 0; i < a.length; i++);
//   newString.push(a[i]);
// }

const reverseString = function (a) {
  const backway = a.split("").reverse("").join("");
  return backway;
}

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i`
// and returns the array of words that are longer than i.
