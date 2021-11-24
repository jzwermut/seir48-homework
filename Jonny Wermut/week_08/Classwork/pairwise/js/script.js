//  Write a function that accepts an array and a number, from the array 
// find the element pairs whose sum equal to that number, and return the sum of their indices.

// If there are multiple valid pairs that have the same numeric elements but different indices, 
// return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

// For example:
// ```js
// pairwise([7, 9, 13, 15, 11, 6], 20)
// // => return 6
// // The pairs that sum to 20 are [7, 13], [9, 11] at indices: 0, 3, 1, 2 (total: 6).

// // pairwise([1, 6, 12, -2, 0, 7, 9, 9], 10) 
// // // => returns 11. 
// // // The pairs that sum to 10 are [1, 9], [12, -2] at indices: 0, 6, 2, 3 (total: 11).
// ```
// ## Bonus

// Find and return all the pairs of indices in the array when the sum is equal to a specific number.

// For example, pairwise([7, 9, 11, 13, 15], 20) returns:

// There is a pair at indices: [0, 3]

// There is a pair at indices: [1, 2]

// ## Bonus

// Find and return all the pairs of indices in the array when the sum is equal to a specific number.

// For example, pairwise([7, 9, 11, 13, 15], 20) returns:

// There is a pair at indices: [0, 3]

// There is a pair at indices: [1, 2]

const pairwise = (arr, num) => {
	let total = 0
	pairs = [];
	arr.forEach((ele, ind) => {
		if (ele < num) {
			arr.forEach((e,i) => {
				if(ind !== i && ele+e === num) {
					pairs.push([ind ,i])
				}
			})
		}
	})
	let sum = 0
	console.log(pairs)
	pairs.forEach((e) => {
		e.forEach((p) => {
			sum+=p
		})
	})
	return sum/2
}