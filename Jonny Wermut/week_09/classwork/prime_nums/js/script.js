// Prime Factors
// A prime number is any number greater than one that is only divisible by itself.
// 1 is not a prime number (it is not greater than 1).
// 2 is a prime number (it is greater than one and is only evenly divisible by itself and 1).
// 3 is a prime number (as above).
// 4 is not a prime number (it is evenly divisible by 2). The prime factors of an integer are the set of prime numbers that will divide the integer exactly.

// -------------
// Example
// What are the prime factors of 60?
// 1 is not a prime number.
// 2 is a prime number. 60 is evenly divisible by 2 (therefore 2 is a prime factor of 60), and leaves 30.
// 30 is evenly divisible by 2 (therefore 2 is a prime factor of 60), and leaves 15.
// 15 is not evenly divisible by 2.
// 3 is the next prime number. 15 is evenly divisible by 3 (therefore 3 is a prime factor of 60), and leaves 5.
// 4 is not a prime number.
// 5 is a prime number. 5 is evenly divisible by 5 (therefore 5 is a prime factor of 60), and leaves 1.
// When we get to 1, we're done.
// The prime factors of 60 are 2, 2, 3, 5 You can check this yourself:
// 2 * 2 * 3 * 5
// = 60
// Success!

// -------------
// YOUR TASK
// Write a function in Javascript which takes a number as its argument and returns an array containing the prime factors of that number.

// -------------
// BONUS
// Do it with recursion

// Some more examples of how to find prime factors
// mesacc.edu

const prime = (n, p = 2) => {
	const arr = []; // base case
	if (n === 1) {
		return arr
	}
	if (p = 2 && n % 2 === 0) {
		arr.push(p);
		return (n/p, p = 2)
	}
	if (p > 2) {
	for (let i = 2; i < p-1 ; i++) { // test for prime
		if (p % i === 0) {
			return prime(n, p + 1)
		}
		else if (n % p === 0) { //if p is prime and n is divisible by p then push p and return 
			arr.push(p);
			return (n/p, p = 2)
			}
		}
	}
}

console.log(prime(60, 2))