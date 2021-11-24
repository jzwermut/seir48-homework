// # Exercises: for loops

// ## The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let i = 0; i < 21; i++) {
	if (i%2 === 0) {
		console.log(`${i} is even`);
	}
	else {
		console.log(`${i} is odd`);
	}
}

// ## Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for (let i=0; i<11; i++) {
	for (let a=0; a<11; a++) {
		console.log(`${i} * ${a} = ${i*a}`);
	}
}

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// ## The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

const assignGrade = (score) => {
	if (score<50) {
		return 'F';
	}
	else if (score >= 50 && score<60) {
		return 'D';
	}
	else if (score >= 60 && score<75) {
		return 'C';
	}
	else if (score >= 75 && score<85) {
		return 'B';
	}
	else {
		return 'A';
	}
}


for (let s=60; s<101; s++) {
		console.log(`For ${s} you got a ${assignGrade(s)}.`);
}