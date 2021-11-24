// Recreate 'cat' in JS

const fs = require('fs'); // fs is from the built-in Node.JS standard library

// Synchronous: Wongissimi -- not enough callbacks!
// const fileData = fs.readFileSync('simpsons.txt', 'utf-8');
// console.log(fileData);

// Asynchronous version
fs.readFile('simpsons.txt', 'utf-8', function (error, result) {
	console.log(result);
})

