// # Exercises: Objects

// ## The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title 
// (a string), servings (a number), and ingredients (an array of strings).

// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// - Mole
// - Serves: 2
// - Ingredients:
// - cinnamon
// - cumin
// - cocoa

const recipe = {
	title: "Guacamole",
	servings: 4,
	ingredients: ['avocado', 'lemon juice', 'onion', 'salt', 'pepper', 'garlic']
};

console.log(recipe.title);
console.log(`Serves: ${recipe.servings}`);
console.log(`${ Object.keys(recipe)[2] }:`);
for (let i=0; i<recipe.length; i++) {
	console.log(recipe.ingredients[i]);
}




// ## The Reading List

// Keep track of which books you read and which books you want to read!

// - Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// - Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// - Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like
// 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

const readingList = [{
	title: "Sapiens",
	author: "Yuval Noah Harari",
	alreadyRead: true
},
{
	title: "Gerrard",
	author: "Steven Gerrard",
	alreadyRead: false
},
{
	title: "Range",
	author: "David Epstein",
	alreadyRead: false
}
]

for (let i=0; i<readingList.length; i++) {
	let currentBook = readingList[i];
	if(currentBook.alreadyRead) {
		console.log(`You already read ${currentBook.title} by ${currentBook.author}.`)
	}
	else {
		console.log(`You still need to read ${currentBook.title} by ${currentBook.author}.`)
	}
}



// ## The Movie Database

// It's like IMDB, but much much smaller!

// - Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// - Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

const favoriteMovie = {
	title: "Gladiator",
	duration: 143,
	stars: ['Russel Crowe', 'Joaquin Phoenix', 'George Smith']
};

const movieInfo = (movie) => {
	console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(', ')}.`);
}

