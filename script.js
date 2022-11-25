// Assignment Code
var generateBtn = document.querySelector("#generate");

//Code below establishes two variables, one for user input and a second holding that value as a number instead of a string. 

var lengthInput;
var passwordLength;

function lengthPrompt() {
  lengthInput = prompt("How many characters would you like in your random password?", "Enter an integer between 8 and 128");
  passwordLength = Math.floor(Number(lengthInput));
  console.log(lengthInput);
  console.log(passwordLength);
  console.log(typeof passwordLength);
  if ((passwordLength < 8) || (passwordLength > 128) || (!passwordLength)) {
    alert("You must enter an integer between 8 and 128!")
    lengthPrompt();
} else {confirm("Your randomly generated password will be " + passwordLength + " characters long.")}
}
  
//passwordLength now holds numerically the length of the string that will be the final password generated. 



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
