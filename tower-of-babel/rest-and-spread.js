var rawArgs = process.argv.slice(2);
    var args = [];
    
    rawArgs.forEach(val => {
      let commaSep = val.split(',');
      commaSep.forEach(val => {
        if(val !== '') args.push(+val);
      });
    });
    
function avg(...numbers){
	return numbers.reduce((sum, numb) => {
		return sum + numb;
	}, 0) / numbers.length;
}    
    
console.log(avg(...args));