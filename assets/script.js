// Assignment code here

var pword = ""

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
var textarea = document.querySelector("password");
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  characterLength();  
  characterTypes();
  pword = generatePassword();
  document.getElementById('password').value = pword;
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

function generatePassword() {
  for (i = 1; i <= passwordLength; i++) {
    notValid = 1
    while (notValid == 1) {
    getRandomNumber(1,4);
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
            numeric = generateNumeric(0,9);
            pword = pword + numeric;
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

