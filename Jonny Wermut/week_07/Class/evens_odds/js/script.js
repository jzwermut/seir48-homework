// Take in an array and return an array of the sums of even and odd numbers. For bonus points, use forEach in your solution.
// evenOddSums([50, 60, 60, 45, 71]); => [170, 116]

// Create a variable to store the sum of evens
// Create a variable to store the sum of odds
// Create an empty array to store the results
// Loop through the array supplied
// For each item test if it's even
// If it's even add it to the sum of the even result

const evenOddSums = (arr) => {
   let evens = 0
   let odds = 0
   arr.forEach(num => {
      if (num%2 === 0) {
         evens += num
      }
      else {
         odds += num
      }
   })
   const result = [evens, odds]
   return result
}

evenOddSums([50, 60, 60, 45, 71])