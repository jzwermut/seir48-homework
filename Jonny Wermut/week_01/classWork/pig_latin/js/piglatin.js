// Create a function that will translate your input to Pig Latin!
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched (it's fine to keep the space between punctuation marks and the word). Not case sensitive.
// E.g. if your input = "Pig Latin is cool !", your output should look like => "igPay atinLay siay oolcay !"

const sentence = 'The quick brown fox jumps over the lazy dog !';

console.log(sentence.split(' '));

const pigLatin = (s) => {
	let sArray = s.split(' ');
	let newArray = [];
	const suffix = 'ay';
	for (let i=0; i<sArray.length; i++) {
		if (sArray[i] !== '?' && sArray[i] !== '!' && sArray[i] !== '.') {
			let firstLetter = sArray[i].slice(0,1);
			let remainingLetters = sArray[i].slice(1);
			let newWord = remainingLetters + firstLetter + suffix;
			newArray.push(newWord);
		}
		else {
			newArray.push(sArray[i]);
		}

	}
	let newSentence = newArray.join(' ');
	return newSentence;
}

console.log(pigLatin(sentence));