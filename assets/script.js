
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Get references to the #password element
var textarea = document.querySelector("password");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Get references to the #clear element
var clearBtn = document.querySelector("#clear");
// Add event listener to clear button
clearBtn.addEventListener("click", clearPassword);


// Write password to the #password input
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

// asking user for their desired password character length (must be between 8 and 128)
function characterLength() {
  passwordLength = window.prompt("How many characters do you want your password to contain?");
  console.log(passwordLength)

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a character length between 8 and 128.");
    characterLength();
  }
}

// asking user for what character types they would like their password to contain
function characterTypes() {

  var charTypePrompt = window.alert("Please select at least one character type to include in your password.");

  lowerCase = window.confirm("Do you want your password to contain lower case characters?");
  console.log("lowerCase: " + lowerCase);

  upperCase = window.confirm("Do you want your password to contain upper case characters?");
  console.log("upperCase: " + upperCase);

  numeric = window.confirm("Do you want your password to contain numbers?");
  console.log("numeric: " + numeric);

  specialCharacters = window.confirm("Do you want your password to contain special characters?");
  console.log("special: " + specialCharacters);

  if ((lowerCase || upperCase || numeric || specialCharacters) === false) {
    characterTypes();
  }
}

// creating a for loop to create a password of the selected character length
function generatePassword() {
  for (i = 1; i <= passwordLength; i++) {
    notValid = 1
    // running a switch conditional in a while loop to randomly select which character type to include for each password character until the desired character length password is created
    while (notValid == 1) {
      getRandomNumber(1, 4);
      switch (characterValue) {
        case 1:
          if (lowerCase) {
            lowerCase = generateLowerCase();
            pword = pword + lowerCase
            notValid = 0;
            console.log(pword);
            break;
          }
          else {
            notValid = 1;
            break;
          }
        case 2:
          if (upperCase) {
            upperCase = generateUpperCase();
            pword = pword + upperCase;
            notValid = 0;
            console.log(pword);
            break;
          }
          else {
            notValid = 1;
            break;
          }
        case 3:
          if (numeric) {
            number = generateNumeric(0, 9);
            pword = pword + number;
            notValid = 0;
            console.log(pword);
            break;
          }
          else {
            notValid = 1;
            break;
          }
        case 4:
          if (specialCharacters) {
            specialCharacters = generateSpecialCharacter();
            pword = pword + specialCharacters;
            notValid = 0;
            console.log(pword);
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

// random number generate to pick which switch case to include for a specific password character
var getRandomNumber = function (min, max) {
  characterValue = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(characterValue);
}
// generating a random lower case letter
function generateLowerCase() {
  const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
  return lowerCaseAlphabet[Math.floor(Math.random() * lowerCaseAlphabet.length)];
}
// generating a random upper case letter
function generateUpperCase() {
  const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upperCaseAlphabet[Math.floor(Math.random() * upperCaseAlphabet.length)];
}
//generating a random number
function generateNumeric(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//generating a random special character
function generateSpecialCharacter() {
  const specialCharacter = "~!@#$%^&*_-\/?<>"
  return specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
}

