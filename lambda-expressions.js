//  one-liner, implicit return
let square = (n) => n * n; //  n*n is returned

console.log(square(4));

//  No parameter, no return
let greet = () => console.log('Hi there!');
greet();

//  No parameter, body and may be a return value
let getNumber = () => {
  let random = parseInt(Math.random() * 100);
  return random;
};

console.log(getNumber());

//  More parameters and a body
let getAge = (yob, currentYear) => currentYear - yob;
console.log(getAge(1950, 2020));
