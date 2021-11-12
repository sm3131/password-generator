// Assignment code here
// window.prompt for password length:
  // store length 
// separate confirm prompts for lowercase, uppercase, numeric, and/or special characters
  // store options
// create global word banks (var wor)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log("button variable test");

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
  lowerCase = window.confirm ("Do you want your password to contain lower case characters?");
  console.log("lowerCase: " + lowerCase);

  upperCase = window.confirm ("Do you want your password to contain upper case characters?");
 console.log("upperCase: " + upperCase);

  numeric = window.confirm ("Do you want your password to contain numbers?");
  console.log("numeric: " + numeric);

  specialCharacters = window.confirm ("Do you want your password to contain special characters?");
  console.log("special: " + specialCharacters);
  }


function generatePassword() {
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
