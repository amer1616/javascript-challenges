/*
sum of all primes upto the included number
prime number: number greater than one, and can be divded on itself or one ..
isPrime(3) : 3%3 = 1,  true
*/

function sumPrimes(num) {
  let primes = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  // check prime numbers
  function isPrime(num) {
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }

  //return primes;
  // use reduce to sum all primes
  return primes.reduce((a, b) => a + b, 0);
}

console.log(sumPrimes(10));
