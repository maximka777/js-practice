var args = process.argv.slice(2);
var minimum = Math.min(...args);
console.log(`The minimum of [${args}] is ${minimum}`);