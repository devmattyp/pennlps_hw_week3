// An array of lowercase characters for use in the password generator
var lowercaseChar = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// An array of uppercase characters for use in the password generator
var uppercaseChar = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

// An array of special characters for use in the password generator
var specialChar = [
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?", "/"
];

// An array of numbers for use in the password generator
var numbers = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// A function which asks various questions about preferred password criteria 
function getPasswordCriteria() {
  var passLength = null;
  
  // Do statement to ask for the password character limit and While statement to enforce a length greater than 8 and less than 128 chars
  do {
    passLength = parseInt(prompt("How many characters do you want to use in your password?"));
  }
  while (isNaN(passLength) || !(passLength >= 8 && passLength <= 128));
  console.log("Pass Length:", passLength);

  var usingLowercase = confirm("Would you like to use lowercase characters?");
  var usingUppercase = confirm("Would you like to use uppercase characters?");
  var usingNumbers = confirm("Would you like to use numbers?");
  var usingSpecialChar = confirm("Would you like to use special characters?");

  var passwordCriteria = {
    passLength: passLength,
    usingLowercase: usingLowercase,
    usingUppercase: usingUppercase,
    usingNumbers: usingNumbers,
    usingSpecialChar: usingSpecialChar
  };
return passwordCriteria;
} 

  // this function takes an array of characters and returns a random character
  function randomChar(characters) {
    var charIndex = Math.floor(Math.random() * characters.length);
    return characters[charIndex];
  }

 // this function creates random string based on password criteria
 function generatePassword() {
  var criteria = getPasswordCriteria();
  debugger
  var allowableChar = [];
  var result = "";

  if (criteria.usingLowercase) {
    allowableChar = allowableChar.concat(lowercaseChar);
  }
  if (criteria.usingNumbers) {
    allowableChar = allowableChar.concat(numbers);
  }
  if (criteria.usingUppercase) {
    allowableChar = allowableChar.concat(uppercaseChar);
  }
  if (criteria.usingSpecialChar) {
    allowableChar = allowableChar.concat(specialChar);
  }
debugger;
  for (var i = 0; i < criteria.passLength; i++) {
    result += randomChar(allowableChar);
  }
console.log(result);
  return result;
}