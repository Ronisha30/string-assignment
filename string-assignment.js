// Variable Exercises

// For each exercise you'll want to log the result to the console to check your work

// 1. Concatenate "hello" with "goodbye"
let hello = "hello";
let goodbye = "goodbye";
let concatentatedGreeting = hello + goodbye;
console.log(concatentatedGreeting);

// 2. Save the substring "Friend" from the string "Hello Friend"
let friend = "Hello Friend";
let substr = friend.slice(6, 12);
console.log(substr);

// 3. Using at least 5 of the following words, create a template literal that makes a legible sentence.
//console.log
let term1 = "Hello";
// let term2 = "my";
let term3 = "name";
// let term4 = "is"
let term5 = "Ronisha";
let term6 = "and";
let term7 = "I";
let term8 = "love";
let term9 = "football";
let savedTempLit = `${term1} my ${term3} is ${term5} ${term6} ${term7} ${term8} ${term9} `;
console.log (savedTempLit);

// 4. Given the string of your full name get your initials.
let fullName = "Ronisha Isham";
console.log(fullName[0]);
console.log(fullName[8]);

let firstInitial = fullName[0];
let lastInitial = fullName[8];
console.log(lastInitial);
console.log(`My initials are ${firstInitial} ${lastInitial}`);
let myInitial = firstInitial + lastInitial;
console.log(myInitial);

// 5. Get the 5th character from the following string: 'Hello World'

let pharse = "Hello World";
console.log(pharse[4]);

// 6. Find the index of the dash from 'Coding-Time!'
let codingTime = "Coding-Time!";
console.log(codingTime.indexOf("-"));
// 6

// 7. Write code to grab the final letter from a any string.
let str = "I like the Dallas Cowboys";
console.log(str[str.length-1]);
//s

// 8. Write code to grab the first 3 letters from a string.
let car = "Range Rover";
console.log(car.slice(0,3));

// 9. Turn the following string into an array of words: 'This-is-a-sentence';
let sentence = "This-is-a-sentence";
console.log(sentence.split('-'));
//[this, is, a, sentence ];

let sentenceArry = sentence.split("-");
//console.log(sentenceArry);

// 10. Make the string of 12 from the following two numbers:
//let one = 1;
//let two = 2;

// this a string of numbers

let one = 1;
let two = 2;
let stringOfOne = one.toString();
console.log(stringOfOne);
let stringOfTwo = two.toString();

console.log(stringOfOne + stringOfTwo);

// Bonus Given the string of ANY first and last name get the initials.
// This code needs to be dynamic, no matter the length of the names this code should work.
// Ex:
// Brad Pitt: BP
// Buzz Lightyear: BL
let personName = "Ezekiel Elliott";
let splitPersonName = personName.split(" ");
console.log(splitPersonName);
let inti1 = splitPersonName[0][0];
console.log(inti1);
let inti2 = splitPersonName[1][0];
console.log(inti2);
let finalInitials = inti1 + inti2;
console.log(finalInitials);
