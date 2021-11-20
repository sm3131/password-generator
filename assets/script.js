
// Get references to the #generate button element 
var generateBtn = document.querySelector("#generate");
// Get references to the #password textarea element
var textarea = document.querySelector("password");
// Add event listener to generate password button
generateBtn.addEventListener("click", writePassword);
// Get references to the #clear button element
var clearBtn = document.querySelector("#clear");
// Add event listener to clear password button
clearBtn.addEventListener("click", clearPassword);


// Function calling other password generation functions
function writePassword() {
  characterLength();
  characterTypes();
  pword = "";
  pword = generatePassword();
  document.getElementById('password').value = pword;
}

function clearPassword() {
  document.getElementById('password').value = "";
}

// Function asking user for their desired password character length (must be between 8 and 128)
function characterLength() {
  passwordLength = window.prompt("How many characters do you want your password to contain? Must enter a number between 8 and 128 characters.");

  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    window.alert("Please enter a character length between 8 and 128.");
    characterLength();
  }
}

// Function asking user for what character types they would like their password to contain
function characterTypes() {

  charTypePrompt = window.alert("Please select at least one character type to include in your password.");

  lowerCase = window.confirm("Do you want your password to contain lower case characters?");

  upperCase = window.confirm("Do you want your password to contain upper case characters?");

  numeric = window.confirm("Do you want your password to contain numbers?");

  specialCharacters = window.confirm("Do you want your password to contain special characters?");

  if ((lowerCase || upperCase || numeric || specialCharacters) === false) {
    characterTypes();
  }
}

// Creating a for loop to generate a password of the selected character length
function generatePassword() {
  for (i = 1; i <= passwordLength; i++) {
    notValid = 1
    // Randomly select which character type to include for each password character until the desired password length is created
    while (notValid == 1) {
      getRandomNumber(1, 4);
      switch (characterValue) {
        case 1:
          if (lowerCase === true) {
            console.log(typeof lowerCase);
            lowerCaseChar = generateLowerCase();
            pword = pword + lowerCaseChar;
            notValid = 0;
            break;
          }
          else {
            notValid = 1;
            break;
          }
        case 2:
          if (upperCase === true) {
            upperCaseChar = generateUpperCase();
            pword = pword + upperCaseChar;
            notValid = 0;
            break;
          }
          else {
            notValid = 1;
            break;
          }
        case 3:
          if (numeric === true) {
            numberChar = generateNumeric(0, 9);
            pword = pword + numberChar;
            notValid = 0;
            break;
          }
          else {
            notValid = 1;
            break;
          }
        case 4:
          if (specialCharacters === true) {
            specialCharactersChar = generateSpecialCharacter();
            pword = pword + specialCharactersChar;
            notValid = 0;
            break;
          }
          else {
            notValid = 1;
            break;
          }
      }
    }
  }
  return pword
}

// Random number generator to pick which switch case to include for a specific password character
var getRandomNumber = function (min, max) {
  characterValue = Math.floor(Math.random() * (max - min + 1) + min);
}
// Generating a random lower case letter
function generateLowerCase() {
  const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
  return lowerCaseAlphabet[Math.floor(Math.random() * lowerCaseAlphabet.length)];
}
// Generating a random upper case letter
function generateUpperCase() {
  const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upperCaseAlphabet[Math.floor(Math.random() * upperCaseAlphabet.length)];
}
// Generating a random number
function generateNumeric(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Generating a random special character
function generateSpecialCharacter() {
  const specialCharacter = "~!@#$%^&*_-\/?<>"
  return specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
}

