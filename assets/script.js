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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
