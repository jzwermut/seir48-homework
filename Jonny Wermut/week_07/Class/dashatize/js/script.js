// Given a number, return a string with dash '-' marks before and after each odd integer, 
// but do not begin or end the string with a dash mark.

// -----------------
// Tests:

// dashatize(274), "2-7-4", "Should return 2-7-4");

// dashatize(5311), "5-3-1-1", "Should return 5-3-1-1");

// dashatize(86320), "86-3-20", "Should return 86-3-20");

// dashatize(974302), "9-7-4-3-02", "Should return 9-7-4-3-02");

// dashatize(NaN), "NaN", "Should return NaN");

// dashatize(0), "0", "Should return 0");

// dashatize(-1), "1", "Should return 1");

// dashatize(-28369), "28-3-6-9", "Should return 28-3-6-9");

const dashatize = (int) => {
   const blah = []
   const split = int.toString().split('')
   split.forEach(function(num, index) {
      if (num%2 !== 0 && index === split.length -1) { // if odd and last letter
         blah.push(`-${num}`)
      }
      else if (num%2 !== 0 && index === 0) { // if odd and first letter
         blah.push(`${num}-`)
      }
      else if (num%2 !== 0) { // if odd
         blah.push(`-${num}-`)
      }
      else { // if even
         blah.push(num)
      }
   })
   return blah.join('')
}

dashatize(274), //, "2-7-4", "Should return 2-7-4");
dashatize(5311), //, "5-3-1-1", "Should return 5-3-1-1");

dashatize(86320), //, "86-3-20", "Should return 86-3-20");

dashatize(974302), //, "9-7-4-3-02", "Should return 9-7-4-3-02");

dashatize(NaN), //, "NaN", "Should return NaN");

dashatize(0)//, "0", "Should return 0");

dashatize(-1) //, "1", "Should return 1");

dashatize(-28369) //, "28-3-6-9", "Should return 28-3-6-9");