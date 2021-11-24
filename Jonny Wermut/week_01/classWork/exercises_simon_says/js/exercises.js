// Warmup - Simon Says
// Create a function that takes an input and returns Simon's response as follows:
//  Simon answers 'Sure.' if you ask him a question.
//  He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//  He says 'Fine. Be that way!' if you address him without actually saying anything.
//  He answers 'Whatever.' to anything else.

const upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
 "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const checkAllCaps = (s) => {
	let allCaps = false;
	for (i=0; i<s.length; i++) {
		if (upperCaseArray.includes(s[i]) || s[i] === ' ') {
			allCaps = true;
		}
		else {
			allCaps = false;
			break;
		}
	}
	return allCaps
}

const simonSays = (string) => {
	//  Simon answers 'Sure.' if you ask him a question.
	if (string.endsWith('?')) {
		return `Sure`;
	}
	//  He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
	else if (checkAllCaps(string)) {
		return `Woah, chill out`;
	}
	else if (string === '') {
		return `Fine. Be that way!`;
	}
	else {	
		return 'Whatever';
	}
}

console.log(simonSays('Would you like some apples?'));
console.log(simonSays('HEY SIMON'));
console.log(simonSays(''));
console.log(simonSays('Por fa vor Señor'));

