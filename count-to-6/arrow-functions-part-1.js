var args = process.argv.slice(2);
var result = args.map((str) => {
	return str[0];
}).reduce((prevValue, currValue) => {
	prevValue += currValue;
	return prevValue;
}, "");

console.log(`[${args}] becomes "${result}"`);