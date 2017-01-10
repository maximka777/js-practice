const max = process.argv[2];
const isDivideByThree = isDivideBy.bin(null, 3);
const isDivideByFive = isDivideBy.bin(null, 5);

let FizzBuzz = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        i++;
        if(i < max){
          if(isDivideByFive(i) && isDivideByThree(i)){
            return {
              done: false,
              value: 'FizzBuzz'
            };
          } else if(isDivideByThree(i)){
            return {
              done: false,
              value: 'Fizz'
            };
          } else if(isDivideByFive(i)){
            return {
              done: false,
              value: 'Buzz'
            };
          } else{
            return {
              done: false,
              value: i
            };
          }
        } else{
          return {
            done: true
          };
        }
      }
    };
  }
}

function isDivideBy(n, number){
  return number % n == 0;
}



for (var n of FizzBuzz) {
  console.log(n);
}