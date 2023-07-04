// Assignment code here
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var specialCharacters = "!@#$%^&*()_-+=[]{}:;|~>=</"
var numbers = "1234567890"
var passwordLengthFinal = 0
var criteria = {
 isSpecChars: true,
 isLowercase: true,
 isUppercase: true,
 isNumbers: true,
}
var password = ""
var clientChose = ""
// This decides what critera for the password has been selected then uses those to generate the password
function passwordGeneration(){
  clientChose = ""
  password = ""
  if (criteria.isLowercase){
    clientChose += lowercaseLetters
  }
  if (criteria.isSpecChars){
    clientChose += specialCharacters
  }
  if (criteria.isNumbers){
    clientChose += numbers
  }
  if (criteria.isUppercase){
    clientChose += uppercaseLetters
  }
  for (var i = 0; i < passwordLengthFinal; i++){
      var randomNumber = Math.floor(Math.random() * clientChose.length);
      password += clientChose.substring(randomNumber, randomNumber +1);
    updatePassword = document.querySelector('#password')
    updatePassword.value = password
  }
}
//This allows the consumer to pick the criteria for their password
function characterSelection(){
  criteria.isLowercase = window.confirm("Use Lowercase Letters?")
  criteria.isUppercase = window.confirm("Use UpperCase letters?")
  criteria.isNumbers = window.confirm("Use numbers?")
  criteria.isSpecChars = window.confirm("Use Special Characters?")
  passwordGeneration()
  return criteria
}
//This allows the consumer to pick the length for their password
function passwordLength(){
  passwordLengthFinal = 0
  passwordLengthFinal = window.prompt("Password Length:","(min 8 max 128)")
   if(!isFinite(passwordLengthFinal)){
    window.alert("Numbers only")
    passwordLength()
   } else if(passwordLengthFinal < 8 ){
    window.alert("8 is the minimum amount")
    passwordLength()
  } else if(passwordLengthFinal > 128){
    window.alert("128 is the maximum amount")
    passwordLength()
  } else {
    characterSelection()
    return passwordLengthFinal
  }
}
// This defines generateBtn as the button on the webpage that is used to generate the password
var generateBtn = document.querySelector("#generate");
//This is an event listener to know when the generate button has been pressed to start the password generation phase
generateBtn.addEventListener("click", passwordLength)








