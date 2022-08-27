// Write the code which outputs prime numbers in the interval from 2 to n.

// For every num in 2...num:
//  Find if a number n is a prime (not divisible by any number from 2...n-1)
//  if prime (no divisors), print the number.

// My solution:
function primesTo(topNum) {
  for (num = 2; num <= topNum; ++num) {
    for (i = 2; i <= num; ++i) {
      /* if i counter has reached n, there's no divisors from 2...n */
      if (num === i) {
        console.log(`${num} is a prime number.`);
      }
      /* If a divisor is found, break the loop */
      if (num % i === 0) {
        break;
      }
    }
  }
}

// javascript.info solution:
// I tried to like this, but used continue without a label. Didn't work.
function allPrimesBefore(endOfRange) {
  outerLoop: for (i = 2; i <= endOfRange; ++i) {
    for (j = 2; j < i; ++j) {
      if (i % j === 0) {
        continue outerLoop;
      }
    }
    console.log(`${i} is a prime number`);
  }
}

console.log("primesTo(10)");
primesTo(10);

console.log("allPrimesBefore(20)");
allPrimesBefore(20);
