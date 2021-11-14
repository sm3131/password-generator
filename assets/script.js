// Assignment code here
// window.prompt for password length:
  // store length in variable passwordLength = window.prompt response between 8-128
// separate confirm prompts for lowercase, uppercase, numeric, and/or special characters
  // store options:
  // lowerCase = response yes/No
  // upperCase = response yes/no
  // numbers = response yes/no
  // specialCharacters = response yes/no

// while loop for character length
// while (i = 0, i <= characterLength, i++)



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  characterLength();  
  characterTypes();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function characterLength() {
  passwordLength = window.prompt ("How many characters do you want your password to contain?");
  console.log(passwordLength)

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert ("Please enter a character length between 8 and 128.");
    return characterLength();
  }
}

  function characterTypes() {

  var charTypePrompt = window.alert("Please select at least one character type to include in your password.");
  
  lowerCase = window.confirm ("Do you want your password to contain lower case characters?");
  console.log("lowerCase: " + lowerCase);

  upperCase = window.confirm ("Do you want your password to contain upper case characters?");
  console.log("upperCase: " + upperCase);

  numeric = window.confirm ("Do you want your password to contain numbers?");
  console.log("numeric: " + numeric);

  specialCharacters = window.confirm ("Do you want your password to contain special characters?");
  console.log("special: " + specialCharacters);
  
  if ((lowerCase || upperCase || numeric || specialCharacters) === false) {
  return characterTypes();
  }
  }
var pword = ""

function generatePassword() {
  while(i = 1, i <= passwordLength, i++) {
    getRandomNumber(1,4);
    switch (characterValue) {
      case 1:
        if (lowerCase) {
          lowerCase = generateLowerCase();
          pword = pword + lowerCase
          console.log(pword);
        }
        else {
          return getRandomNumber();
        }
        case 2:
          if (upperCase) {
            upperCase = generateUpperCase();
            password = password + upperCase
          }
          else {
            return getRandomNumber();
          }
        case 3:
          if (numeric) {
            numeric = generateNumeric(0,9);
            password = password + numeric
          }
          else {
            return getRandomNumber();
          }
        case 4:
          if (specialCharacters)
            specialCharacters = generateSpecialCharacter();
            password = password + specialCharacter
          } 
          else {
            return getRandomNumber();
          }
      }

  var getRandomNumber = function(min, max) {
    characterValue = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(characterValue);


  }

function generateLowerCase() {
  const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
   return lowerCaseAlphabet[Math.floor(Math.random() * lowerCaseAlphabet.length)];
  }

function generateUpperCase() {
  const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upperCaseAlphabet[Math.floor(Math.random() * upperCaseAlphabet.length)];
}

function generateNumeric(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateSpecialCharacter() {
  const specialCharacter = "~!@#$%^&*_-\/?<>"
  return specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);