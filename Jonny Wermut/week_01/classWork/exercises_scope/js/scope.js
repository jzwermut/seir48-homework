const globalMessage = 'Hello Cruel World';

const showGlobalMesage = () => {
	console.log( globalMessage );
};

showGlobalMesage();
console.log(globalMessage);

// Function scope
const showLocalMessage = () => {
	const localMessage = 'Goodbye cruel world';
	console.log( localMessage );
};

showLocalMessage();
// console.log(localMessage); // out of scope so crashes

//var inside a block
if (1000 > 2) {
	var hotdogs = Infinity; //global scope
	console.log('how many hotdogs?', hotdogs); // works
}

console.log('how many hotdogs?', hotdogs); //works

// let inside a block
if(1000>2) {
	let goldfish = 777;
	console.log('how many goldfish?', goldfish); //works
}

console.log('how many goldfish?', goldfish); //crashes

