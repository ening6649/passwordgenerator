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
        switch (password) {
          case 0:
            password = "0";
            break;
          case 1:
            password = "1";
            break;
          case 2:
            password = "2";
            break;
          case 3:
            password = "3";
            break;
          case 4:
            password = "4";
            break;
          case 5:
            password = "5";
            break;
          case 6:
            password = "6";
            break;
          case 7:
            password = "7";
            break;
          case 8:
            password = "8";
          case 9:
            password = "9";
          case 10:
            password = "a";
          case 11:
            password = "b";
          case 12:
            password = "c"
          case 13

        
        }
        console.log(password)
      }
    } else {
      window.alert ("You did not choose a valid number");
      generatePassword();
  //  re run the start 
    }
  
};

generatePassword();







// for(var i=0; i< 9; i++ ) {
//   randomNumber(lowerCase, lowerCase);
//   letter = randomNumber(lowerCase, lowerCase);
//   console.log(letter); 
// }  


// var upperCase = window.confirm("Would you like to include uppercase letters?")
//   if (upperCase) {
//     // include upperCase in generatePassword
//   }
// var lowerCase = window.confirm("Would you like to include letters?")
//   if (lowerCase) {
//     // include letters in generatePassword
//   }
// var specialCharacters = window.confirm("Would you like to include special characters?")
//   if (specialCharacters) {
    // include special character in generatePassword
  // }

// object to insert special cases 
// var allCharacter = {
//   number: 
//   upperCase
//   lowerCase
//   specialCharacters
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
