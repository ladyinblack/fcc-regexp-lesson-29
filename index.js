// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Positive and Negative Lookaheads</h1>`;

/** TODO:
 * Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
 
 let sampleWord = "astronaut";
 let pwRegex /change/;     // Change this line 
 let result = pwRegex.test(sampleWord);
 */

function ValidatePassword(sampleWord) {
  let pwRegex = /(?=[A-Za-z])(?=\D*\d\d){6,}/;
  // let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
  return pwRegex.test(sampleWord);
}

console.log(ValidatePassword('astronaut'));
console.log(ValidatePassword('banan1'));
console.log(ValidatePassword('bana12'));
console.log(ValidatePassword('abc123'));
console.log(ValidatePassword('12345'));
console.log(ValidatePassword('8pass99'));
console.log(ValidatePassword('1a2bcde'));
console.log(ValidatePassword('astr1on11aut'));

/** HINT 1:
 * Remember to use 2 lookaheads to check the patterns in the string.  The first lookahead is very similar to that given in the example - '(?=\w{3,6})' - only the lower-number 3 is too low for our test cases, and an upper-number is completely unnecessary.  This first lookahead is only used to find a string consisting of a certain amount of characters.  A second lookahead must be used to check for consecutive numerical values at the end of the string.
 *
 * HINT 2:
 * The second lookahead is also similar to that given in the example - (?=\D*\d) - however, this exprssion too must be modified to pass all test cases.  Remember to specify the exact amount of numbers you want to appear at the end of the string.
 */
