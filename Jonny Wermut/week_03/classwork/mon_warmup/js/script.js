// # Allergies Warmup

// An allergy test produces a single numeric score which contains the information about all the 
// allergies the person has (that they were tested for).

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
// If Mary has a score of 17, she must be allergic to tomatoes and eggs, but not peanuts or shellfish.

// Now, given just that score of 34, your program should be able to say:

// - Whether Tom is allergic to any one of those allergens listed above.
// - All the allergens Tom is allergic to.

// scorecard:
//   1: "eggs",
//   2: "peanuts",
//   4: "shellfish",
//   8: "strawberries",
//   16: "tomatoes",
//   32: "chocolate",
//   64: "pollen",
//   128: "cats"

const allergies = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128
}

const isAllergic = (score) => {
  let remainingScore = score;
  const allergyList = [];
  const keys = Object.keys(allergies);
  const values = Object.values(allergies);

  if (score === 0) {
      allergyList.push('None');
    }

  else { 
    for (let i = values.length -1; i >= 0; i--) {
      let key = keys[i];
      let val = values[i];
      
      if (val <= remainingScore) {
        allergyList.push(`${key}: ${val}`);
        remainingScore -= val;
    }
  }
}
  return allergyList;
}