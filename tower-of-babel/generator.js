const max = process.argv[2];
const isDivideByThree = isDivideBy.bin(null, 3);
const isDivideByFive = isDivideBy.bin(null, 5);

function *FizzBuzz(){
	let i = 0;
	while(i < max){
        i++;
        if(i < max){
          if(isDivideByFive(i) && isDivideByThree(i)){
            yield 'FizzBuzz';
          } else if(isDivideByThree(i)){
            yield 'Fizz';
          } else if(isDivideByFive(i)){
            yield 'Buzz';
          }
          yield i;
        }
	}
}

function isDivideBy(n, number){
  return number % n == 0;
}


for (var n of FizzBuzz) {
  console.log(n);
}