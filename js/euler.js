// Project Euler: JavaScript Solutions

// Problem 1: Multiples of 3 and 5
function sumOfMultiples(number) {
  var sumOfThree = 0;
  var sumOfFive = 0;
  var sumTotal = 0;

  if (number < 5) {
    sumOfFive = 0;
  } else {
    for (var i = 5; i < number; i += 5) {
      sumOfFive += i;
    }
  }

  if (number < 3) {
    sumOfThree = 0;
  } else {
    for (var j = 3; j < number; j += 3) {
      // Check for mutiples of 5 already counted.
      if (j % 5 != 0) {
        sumOfThree += j;
      }
    }
  }

  sumTotal = sumOfFive + sumOfThree;

  return sumTotal;
}

function problem1() {
  document.getElementById("answer1").innerHTML = 
    sumOfMultiples(document.getElementById("problem1").value);
}

// Problem 2: Even Fibonacci Numbers
function evenFibonacci(number) {
  var evenSum = 0;
  var fib1 = 1;
  var fib2 = 2;
  var fibCount = 0;

  // Base case
  if (number < 3) {
    evenSum = 0;
  } else {
    while (fibCount < number) {
      if (fib2 % 2 === 0) {
        evenSum += fib2;
      }
      fibCount = fib1 + fib2;
      fib1 = fib2;
      fib2 = fibCount;
    }
  }

  return evenSum;
}

function problem2() {
  document.getElementById("answer2").innerHTML = 
    evenFibonacci(document.getElementById("problem2").value);
}

// Problem 3: Largest Prime Factor
function largestPrime(number) {
  var isPrime = false;
  var currentNum = number;
  var divisor = 2;
  var maxPrime = 1;

  while (isPrime != true && divisor <= currentNum) {
    if (currentNum % divisor === 0) {
      currentNum /= divisor;
      if (divisor > maxPrime) {
        maxPrime = divisor;
      }
      divisor = 2;
    } else {
      divisor++;
    }

    if (divisor > currentNum) {
      isPrime = true;
    }
  }
  return maxPrime;
}

function problem3() {
  document.getElementById("answer3").innerHTML = 
    largestPrime(document.getElementById("problem3").value);
}
