// Assignment code here
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var specialCharacters = "!@#$%^&*()_-+=[]{}:;|~>=</"
var numbers = "1234567890"
function generatePassword(){
  var password = ""
  var passwordLength = Math.floor(Math.random() * 15) + 9;
  for (var i = 0; i <= passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
  }
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

 //Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
