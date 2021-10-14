// Assignment code here


// random number generator 
var randomNumber= function(min,max) {
  var value = Math.floor(Math.random()*(max-min+1)+min);
  return value;
}

var generatePassword = function () {
  var passwordLength = window.prompt ("Choose your password length, enter a number between 8 and 128 ");
  passwordLength = parseInt(passwordLength);
    if (passwordLength >=8 && passwordLength <=128) {
  //  run generator 
      for(var i=0; i<passwordLength;i++) {
        randomNumber(0,9);
        
        password= randomNumber(0,9);
        console.log(password)
      }
    } else {
      window.alert ("You did not choose a valid number");
      generatePassword();
  // or re run the start 
    }
  
};

generatePassword();

var upperCase = window.confirm("Would you like to include uppercase letters?")
  if (upperCase) {
    // include upperCase in generatePassword
  }
var numeric = window.confirm("Would you like to include numbers?")
  if (numeric) {
    // include numbers in generatePassword
  }
var specialCharacters = window.confirm("Would you like to include special characters?")
  if (specialCharacters) {
    // include special character in generatePassword
  }


// for(var i=0; i<passwordLength;i++) {
//   var randomNumber = function(min,max) {
//   var value = Math.floor(Math.random() * (max-min +1) + min);
//   // returns and stores a value , also ends function exectuion 
//   return value;
//   };
//   console.log (randomNumber(0,9));
//   generatedNumber = randomNumber (0,9);
// }



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
