
// # Exercises: if/else statements

// ## What number's bigger?

// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// - Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum = (num1, num2) => {
	if (num1>num2) {
		return num1;
	}
	else if (num2>num1) {
		return num2;
	}
	else {
		return 'They are equal';
	}
}

// ## The World Translator

// Write a function named helloWorld that:
// - takes 1 argument, a language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// - Call that function for each of the supported languages and log the result to make sure it works.

const helloWorld = (lang) => {
	if (lang == 'Polish') {
		return 'Witaj świecie';
	}
	else if (lang == 'Portugese') {
		return 'Olá Mundo';
	}
	else {
		return 'Hello World';
	}
}


// ## The Grade Assigner

// Write a function named assignGrade that:
// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that function for a few different scores and log the result to make sure it works.

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


// ## The Pluralizer

// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// - Call that function for a few different scores and log the result to make sure it works.
// - Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralize = (noun, num) => {
	if (noun === 'goose') {
		return `${num} geese`;
	}
	else if (noun === 'sheep') {
		return `${num} sheep`;
	}
	else if (noun === 'fish') {
		return `${num} fish`;
	}
	else if (num===1) {
		return `${num} ${noun}`;
	}
	else if (num>1) {
		return `${num} ${noun}s`;
	}
}