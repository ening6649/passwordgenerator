// Assignment code here
// var writePassword = {
//   length: 8 -128,
//   characterType: lowercase, uppercase, numeric, specialCharacters, (at least one charaacter type should be selected)
//   window.alert (password), 

// }

var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max-min +1) + min);
  // returns and stores a value , also ends function exectuion 
  return value;
  
};

console.log (randomNumber(0,9));


// var passwordArray = ["1", "2", "3", "4", "5", "6"]
// for

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
  
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
