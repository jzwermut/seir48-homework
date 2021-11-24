// # Counting Valleys
// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly some number of steps, for every step it was noted if it was an uphill `U`, or a downhill, `D` step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:
// - A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// - A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Write a function that accepts a string as a sequence of up and down steps during a hike, return the number of valleys walked through.
// ```js
// counting_valleys('UDDDUDUU')
// // => expect to return 1
// ```
// ### Explanation
// If we represent `_` as sea level, a step up as `/`, and a step down as `\`, the hike can be drawn as:
// ```
// _/\      / \
//    \    /   \ /
//     \/\/
// ```

const counting_valleys = (str) => {
   let level = 0
   let numValleys = 0
   let steps = str.split('')
   steps.forEach(step => {  
      if (step === 'U') {
         level += 1;
         if (level === 0) {
         numValleys += 1
         }}
      else if (step === 'D') {
         level -= 1;
         }   
      })
   return numValleys;
}



counting_valleys('UDDDUDUU')