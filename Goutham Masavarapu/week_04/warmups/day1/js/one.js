// # Allergies Warmup
//
// An allergy test produces a single numeric score which contains
// the information about all the allergies the person has (that they were tested for).
//
// The list of items (and their value) that were tested are:
//
// - eggs (1)
// - peanuts (2)
// - shellfish (4)
// - strawberries (8)
// - tomatoes (16)
// - chocolate (32)
// - pollen (64)
// - cats (128)
// # Allergies Warmup
// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).
// The list of items (and their value) that were tested are:
// - eggs (1)
// - peanuts (2)
// - shellfish (4)
// - strawberries (8)
// - tomatoes (16)
// - chocolate (32)
// - pollen (64)
// - cats (128)
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
// Now, given just that score of 34, your program should be able to say:
// - Whether Tom is allergic to any one of those allergens listed above.
// - All the allergens Tom is allergic to.
// ```
// scorecard:
  // 1: "eggs",
  // 2: "peanuts",
  // 4: "shellfish",
  // 8: "strawberries",
  // 16: "tomatoes",
  // 32: "chocolate",
  // 64: "pollen",
  // 128: "cats"
// ```

// find a way to store the scorecard: object
const scorecard = {//take an object
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats"
}


const allergyScore = function(num) {//write a function to check with the number


  const allergiesList = [];// empty array to store the allergy list 

  const values = Object.keys(scorecard);
  // array of keys

  if (num === 0) {
    //if score is 0
    //return yay!!
    return 'No allergies';
  } else {
    // loop through the values and check if the number is greater than the values then go and
     // subtract the num
    for (let i = values.length - 1; i >= 0; i--) {
      let score = values[i];//store the values[i] in the score
      if (num >= score) {

        allergiesList.push(scorecard[score]);//push it into an empty array
        num -= values[i];//minus allergy score from number
      }
    }
  }
  // return `Here is the list of allergies: ${allergiesList.join(', ')}`;
  return allergiesList;
}

console.log(allergyScore(12));
console.log(allergyScore(34));
console.log(allergyScore(17));




//
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
// If Mary has a score of 17, she must be allergic to tomatoes and eggs, but not peanuts or shellfish.
//
// Now, given just that score of 34, your program should be able to say:
//
// - Whether Tom is allergic to any one of those allergens listed above.
// - All the allergens Tom is allergic to.
//
// ```
// scorecard:
//   1: "eggs",
//   2: "peanuts",
//   4: "shellfish",
//   8: "strawberries",
//   16: "tomatoes",
//   32: "chocolate",
//   64: "pollen",
//   128: "cats"
// ```
