// Assignment Code
var generateBtn = document.querySelector("#generate");

//Code below establishes two variables, one for user input and a second holding that value as a number instead of a string. 

var lengthInput;
var passwordLength;

function lengthPrompt() {
  lengthInput = prompt("How many characters would you like in your random password?", "Enter an integer between 8 and 128");
  passwordLength = Math.floor(Number(lengthInput));
  if ((passwordLength < 8) || (passwordLength > 128) || (!passwordLength)) {
    alert("You must enter an integer between 8 and 128!")
    lengthPrompt();
} else {confirm("Your randomly generated password will be " + passwordLength + " characters long.")}
}
  
//passwordLength now holds numerically the length of the string that will be the final password generated. 

//Now we will make a function to find out if users want to use each specific type of character, starting with lowerCase.

var lowerCaseInput;

function getLowerCaseInput() {
  lowerCaseInput = confirm("Would you like your randomly generated password to include lower case letters? Click OK to include them or CANCEL to exclude.");
  if (lowerCaseInput) {
    lowerCaseInput = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    alert("You have chosen to include lower case letters in your randomly generated password.");
  } else {
    lowerCaseInput = false;
    alert("You have chosen to exclude lower case letters from your randomly generated password.");
  }
}

//The variable lowerCaseInput now holds either an array with each individual character as an element in the array or an empty string. We will now run the same process with each other class of character, with the ultimate aim of concatenating the arrays together.

var upperCaseInput;

//Fun bug here: I tried to use an array map method and toUpperCase string method, although I realized that there was nothing to capitalize if the user chose to exclude lower case letters. 

function getUpperCaseInput() {
  upperCaseInput = confirm("Would you like your randomly generated password to include upper case letters? Click OK to include them or CANCEL to exclude.");
  if (upperCaseInput) {
    upperCaseInput = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    alert("You have chosen to include upper case letters in your randomly generated password.");
  } else {
    upperCaseInput = false;
    alert("You have chosen to exclude upper case letters from your randomly generated password.");
  }
}

var numberInput;

function getNumberInput() {
  numberInput = confirm("Would you like your randomly generated password to include numbers? Click OK to include them or CANCEL to exclude.");
  if (numberInput) {
    numberInput = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    alert("You have chosen to include numbers in your randomly generated password.");
  } else {
    numberInput = false;
    alert("You have chosen to exclude numbers from your randomly geenrated password.");
  }
}

var specialCharInput;

function getSpecialCharInput() {
  specialCharInput = confirm("Would you like your randomly generated password to include special characters? Click OK to include them or CANCEL to exclude.");
  if (specialCharInput) {
    specialCharInput = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]","^", "_", "`", "{", "|", "}", "~"];
    alert("You have chosen to include special characters in your randomly generated password.");
  } else {
    specialCharInput = false;
    alert("You have chosen to exclude special characters from your randomly generated password.");
  }
}

//Here, I've finished writing each of the functions required for receiving and logging user input. I'll write one more short function that checks user input to ensure they haven't excluded all classes of characters.
//Then, for concision's sake, I'll compress into a single getUserInput function the four prompt functions. It will look much sharper in the final generatePassword function.

function checkUserInput() {
  if ((!lowerCaseInput) && (!upperCaseInput) && (!numberInput) && (!specialCharInput)) {
    alert("User, I am a machine, not a miracle worker. I can not randomly generate a password composed of characters that excludes all classes of characters. Please choose at least one class of characters to include in your randomly generated password.");
    getUserInput();
  } else {
    alert("Give me a moment while I randomly generate your password!");
  }
}

function getUserInput() {
  getLowerCaseInput();
  getUpperCaseInput();
  getNumberInput();
  getSpecialCharInput();
  checkUserInput();
}

//Next, I'll want to concatenate the four arrays held in the separate input variables into a single userInput array. 

var userInput;

//The part below took me awhile to figure out, and I am not totally satisfied with the solution I came up with in spite of its functionality.
//I ran into the problem of how to effectively concatenate arrays that may or may not actually carry any elements within them. Essentially, how do I include populated arrays and exclude unpopulated ones?
//I set the undesired arrays equal to false, and worked out each possible iteration of user inputs so that I could individually select for each possibility.
//While this effectively created a single array with all desired elements, I am not convinced that there wasn't a far more efficient method.

function makeUserInput() {
  if ((lowerCaseInput) && (upperCaseInput) && (numberInput) && (specialCharInput)) {
    userInput = lowerCaseInput.concat(upperCaseInput, numberInput, specialCharInput);
  } else if ((lowerCaseInput) && (upperCaseInput) && (numberInput) && (!specialCharInput)) {
    userInput = lowerCaseInput.concat(upperCaseInput, numberInput);
  } else if ((lowerCaseInput) && (upperCaseInput) && (!numberInput) && (specialCharInput)) {
    userInput = lowerCaseInput.concat(upperCaseInput, specialCharInput);
  } else if ((lowerCaseInput) && (!upperCaseInput) && (numberInput) && (specialCharInput)) {
    userInput = lowerCaseInput.concat(numberInput, specialCharInput);
  } else if ((lowerCaseInput) && (upperCaseInput) && (!numberInput) && (!specialCharInput)) {
    userInput = lowerCaseInput.concat(upperCaseInput);
  } else if ((lowerCaseInput) && (!upperCaseInput) && (numberInput) && (!specialCharInput)) {
    userInput = lowerCaseInput.concat(numberInput);
  } else if ((lowerCaseInput) && (!upperCaseInput) && (!numberInput) && (specialCharInput)) {
    userInput = lowerCaseInput.concat(specialCharInput);
  } else if ((lowerCaseInput) && (!upperCaseInput) && (!numberInput) && (!specialCharInput)) {
    userInput = lowerCaseInput;
  } else if ((!lowerCaseInput) && (upperCaseInput) && (numberInput) && (specialCharInput)) {
    userInput = upperCaseInput.concat(numberInput, specialCharInput);
  } else if ((!lowerCaseInput) && (upperCaseInput) && (numberInput) && (!specialCharInput)) {
    userInput = upperCaseInput.concat(numberInput);
  } else if ((!lowerCaseInput) && (upperCaseInput) && (!numberInput) && (specialCharInput)) {
    userInput = upperCaseInput.concat(specialCharInput);
  } else if ((!lowerCaseInput) && (upperCaseInput) && (!numberInput) && (!specialCharInput)) {
    userInput = upperCaseInput;
  } else if ((!lowerCaseInput) && (!upperCaseInput) && (numberInput) && (specialCharInput)) {
    userInput = numberInput.concat(specialCharInput);
  } else if ((!lowerCaseInput) && (!upperCaseInput) && (numberInput) && (!specialCharInput)) {
    userInput = numberInput;
  } else {
    userInput = specialCharInput;
  }
}


//I'll now want to actually write the function that will randomly select an element from the userInput array and add it to a string.
//I'll use a forLoop to try this out. The function will reiterate itself the number of times saved in the passwordLength variable.

var randomNumber;
var randomCharacterHolder;
var randomString = "";

function randomPassword() {
  for (i=0; i < passwordLength; i++) {
  randomNumber = Math.floor(Math.random() * userInput.length);
  randomCharacterHolder = (randomNumber, userInput[randomNumber]);
  randomString = randomString.concat(randomCharacterHolder)
  }
}

function generatePassword() {
  lengthPrompt();
  getUserInput();
  makeUserInput();
  randomPassword();
  return (randomString);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
