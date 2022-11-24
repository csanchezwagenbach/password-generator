// Assignment Code
var generateBtn = document.querySelector("#generate");

var lengthInput;
var passwordLength;

function lengthPrompt() {
  lengthInput = prompt("How many characters would you like in your random password?", "Enter an integer between 8 and 128");
  passwordLength = Number(lengthInput);
  console.log(lengthInput);
  console.log(passwordLength);
  console.log(typeof passwordLength);
  if ((passwordLength < 8) || (passwordLength > 128) || (!passwordLength)) {
    alert("You must enter an integer between 8 and 128!")
    lengthPrompt();
} else {confirm("Your randomly generated password will be " + passwordLength + " characters long.")}
}
  


function generatePassword() {
  lengthPrompt();
  console.log(passwordLength);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
