// Assignment code here


// random number generator 
var randomNumber= function(min,max) {
  var value = Math.floor(Math.random()*(max-min+1)+min);
  return value;
}






// convert random number to random letters, characters and numbers

    
    

    
    // console.log(password)
   
    
// var Switch1= function () {
 
// }



var generatePassword = function () {
  var passwordLength = window.prompt ("Choose your password length, enter a number between 8 and 128 ");
  passwordLength = parseInt(passwordLength);
    if (passwordLength >=8 && passwordLength <=128) {
  //  run generator
      var upperCaseConfirm = confirm("Would you like to include uppercase?");
      var lowerCaseConfirm = confirm("Would you like to include lowercase?");
      var specialCharacterConfirm = confirm("Would you like to include special characters?");
      var numberConfirm = confirm("Would you like to include numbers?");
      
        for(var i=0; i<passwordLength;i++) {
            if (numberConfirm) {
              randomNumber (0,9);
              password = randomNumber (0,9);
            } 
            if (numberConfirm && lowerCaseConfirm) {
              randomNumber (0, 35);
              password = randomNumber (0,35);
            } 
            if (numberConfirm && lowerCaseConfirm && upperCaseConfirm) {
              randomNumber (0,61);
              password = randomNumber (0,61);
            } 
            if (numberConfirm && lowerCaseConfirm && upperCaseConfirm && specialCharacterConfirm) {
              randomNumber (0,71);
              password = randomNumber (0,71);
            }  
            if (lowerCaseConfirm) {
              randomNumber (10,35);
              password = (10,35);
            }  
            if (lowerCaseConfirm && upperCaseConfirm) {
              randomNumber (10, 61);
              password = (10,61);
            } 
            if (lowerCaseConfirm && upperCaseConfirm && specialCharacterConfirm) {
              randomNumber (10, 71);
              password = (10,71);
            }  
            if (upperCaseConfirm) {
              randomNumber (35,61);
              password = randomNumber (35,61);
            }  
            if (upperCaseConfirm && specialCharacterConfirm) {
              randomNumber (35,71);
              password = randomNumber (35,71);
            } 
            if (specialCharacterConfirm && upperCaseConfirm && numberConfirm) {
              randomNumber ();
              password = randomNumber ();
            }
            if (lowerCaseConfirm && upperCaseConfirm && specialCharacterConfirm) {
              randomNumber (10,71);
              password = randomNumber (10,71);
            }
            // if (upperCaseConfirm && numberConfirm) {
            //   randomNumber ();
            //   password = randomNumber ()
            // }
            // if (lowerCaseConfirm && specialCharacterConfirm) {
            //   randomNumber ();
            //   password =randomNumber ();
            // }
            // if (specialCharacterConfirm) {

            // }
            // if (specialCharacterConfirm && numberConfirm && lowerCaseConfirm ) {

            // }
            // if (specialCharacterConfirm && numberConfirm )  {

            // }
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
                break;
              case 9:
                password = "9";
                break;
              case 10:
                password = "a";
                break;
              case 11:
                password = "b";
                break;
              case 12:
                password = "c";
                break;
              case 13:
                password = "d";
                break;
              case 14:
                password = "e";
                break;
              case 15:
                password = "f";
                break;
              case 16:
                password = "g";
                break;
              case 17:
                password = "h";
                break;
              case 18:
                password = "i";
                break;
              case 19:
                password = "j";
                break;
              case 20:
                password = "k";
                break;
              case 21:
                password = "l";
                break;
              case 22:
                password = "m";
                break;
              case 23:
                password = "n";
                break;
              case 24:
                password = "o";
                break;
              case 25:
                password = "p";
                break;
              case 26:
                password = "q";
                break;
              case 27:
                password = "r";
                break;
              case 28: 
                password = "s";
                break;
              case 29:
                password = "t";
                break;
              case 30:
                password = "u";
                break;
              case 31:
                password = "v";
                break;
              case 32:
                password = "w"
                break;
              case 33:
                password = "x";
                break;
              case 34:
                password = "y";
                break;
              case 35:
                password = "z";
                break;
              case 36:
                password = "A";
                break;
              case 37:
                password = "B";
                break;
              case 38:
                password = "C";
                break;
              case 39:
                password = "D";
                break;
              case 40:
                password = "E";
                break;
              case 41:
                password = "F";
                break;
              case 42:
                password = "G";
                break;
              case 43:
                password = "H";
                break;
              case 44:
                password = "I";
                break;
              case 45:
                password = "J";
                break;
              case 46:
                password = "K";
                break;
              case 47:
                password = "L";
                break;
              case 48:
                password = "M";
                break;
              case 49:
                password = "N";
                break;
              case 50:
                password = "O";
                break;
              case 51:
                password = "P";
                break;
              case 52:
                password = "Q";
                break;
              case 53:
                password = "R";
                break;          
            }  
            
            
            console.log(password)
        }
     
      
    } else {
      window.alert ("You did not choose a valid number");
      
  //  re run the start 
    }
    
  
};

generatePassword();



















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
