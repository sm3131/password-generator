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
  console.log("1111 writePassword function invoked");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function userPrompt() {
  passwordLength = window.prompt ("How many characters do you want your password to contain?");

  lowerCase = window.confirm ("Do you want your password to contain lower case characters?");

  upperCase = window.confirm ("Do you want your password to contain upper case characters?");

  numeric = window.confirm ("Do you want your password to contain numbers?");

  specialCharacters = window.confirm ("Do you want your password to contain special characters?");
}

function generatePassword() {
  console.log()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
