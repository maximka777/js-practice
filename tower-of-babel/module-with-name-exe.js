var arg1 = process.argv[2];
var arg2 = process.argv[3];
import {PI} from './modules-with-name';
import {sqrt} from './modules-with-name';
import {square} from './modules-with-name';

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));