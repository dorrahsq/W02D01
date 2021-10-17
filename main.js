//Write a function sum that accepts two number arguments and returns the sumation of these numbers.
const sum = function (a, b) {
  return a + b;
};

sum(5, 10); // => 15
sum(15, 10); // => 25

//  Write a function average that accepts two number arguments and returns the average of these numbers.
const average = function (a, b) {
  return (a + b) / 2;
};

//Wite a function findFactorial Given an integer n, return n! (n factorial)

let sumi = 1;
const findFactorial = (n) => {
  for (let i = n; i > 0; i--) {
    sumi = sumi * i;
  }
  return sumi;
};

//Write a function round that accepts one number argument, number and returns the number rounded to the nearest integer. .
const round = function (number) {
  return Math.round(number);
};

//Write a function toThePowerOf that accepts two number arguments, base and exponent, and returns the base to the exponent power.
const toThePowerOf = function (base, exponent) {
  return Math.pow(base, exponent);
};

//Write a function randomNumber that returns a random value between zero and one (includes 0 but not 1).
const randomNumber = function () {
  return Math.random();
};

//Write a function oneOrZero that uses randomNumber to return either the number zero or one.
const oneOrZero = function () {
  let random = randomNumber();
  if (random >= 0.5) {
    return 1;
  }
  return 0;
};

//Write a function randomRange that accepts a positive number and returns a random number between zero and the passed in argument.
const randomRange = function (number) {
  return Math.round(Math.random() * number);
};

//write a function includeOf that accept two string arguments string, character and
//returns true if the string contain the character
const includeOf = function (string, character) {
  if (string.indexOf(character) !== -1) {
    return true;
  }
  return false;
};

const includeOf2 = function (string, character) {
  for (let i = 0; i < string.length; i++) {
    // for (let j = 0 ; j<character.length ; i++)
    console.log(string[i]);
    if (string[i] === character) {
      return true;
    }
  }
};
