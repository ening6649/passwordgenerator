// Assignment code here


// random Number generator 
var randomNumber= function(min,max) {
  var value = Math.floor(Math.random()*(max-min+1)+min);
  return value;
}

// var randomNumber = function (myNumber) {
//   var value = Math.floor(Math.random()*(myNumber+1)*10);
//   return value;
// }

var number = ['0','1','2','3','4','5','6','7','8','9']
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ]
var upperCase = ["A", "B", "C","D","E","F","G","H","I","J","K","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&","*","(",")"]

var mixMatch = []

var passwordLength = window.prompt ("Choose your password length, enter a number between 8 and 128 ");

var generatePassword = function () {
  let upperCaseConfirm = confirm("Would you like to include uppercase?");
  let lowerCaseConfirm = confirm("Would you like to include lowercase?");
  let specialCharacterConfirm = confirm("Would you like to include special characters?");
  let numberConfirm = confirm("Would you like to include numbers?");
  for (var i=0; i<passwordLength; i++) {
    if (upperCaseConfirm) {
      // mixMatch = Array.from(upperCase[i]);
      mixMatch.push.apply(upperCase)
    }
    if (lowerCaseConfirm) {
      // mixMatch = Array.from(lowerCase[i]);
      mixMatch.push.apply(lowerCase)
    }
    if (specialCharacterConfirm) {
      // mixMatch = Array.from(specialCharacter[i]);
      mixMatch.push.apply(specialCharacter)
    }
    if (numberConfirm) {
      // mixMatch = Array.from(number[i]);
      mixMatch.push.apply(number)
    } 
    password = randomNumber(0, mixMatch.length);
     console.log(mixMatch.length)
    return password;
  };
  
 
}

if (passwordLength >=8 && passwordLength <=128) {
  generatePassword();
} else {
  alert ("You did not choose a valid number");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
