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

//Now we will make a function to find out if users want to use each specific type of character, starting with lowerCase.

var lowerCaseInput;

function getLowerCaseInput() {
  lowerCaseInput = confirm("Would you like your randomly generated password to include lower case letters? Click OK to include them, and CANCEL to exclude.");
  if (lowerCaseInput) {
    lowerCaseInput = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    alert("You have chosen to include lower case letters in your randomly generated password.");
  } else {
    lowerCaseInput = "";
    alert("You have chosen to exclude lower case letters from your randomly generated password.");
  }
}

//The variable lowerCaseInput now holds either an array with each individual character as an element in the array or an empty string. We will now run the same process with each other class of character, with the ultimate aim of concatenating the arrays together.

function generatePassword() {
  lengthPrompt();
  console.log(passwordLength);
  getLowerCaseInput();
  console.log(lowerCaseInput);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
