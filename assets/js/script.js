// Assignment code here


// random Number generator 
var randomNumber= function(min,max) {
  var value = Math.floor(Math.random()*(max-min+1)+min);
  return value;
}

// arrays of password
var number = ['0','1','2','3','4','5','6','7','8','9']
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ]
var upperCase = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&","*","(",")"]
// empty array
var mixMatch = []



var generatePassword = function () {
  // prompt for length
  var passwordLength = window.prompt ("Choose your password length, enter a number between 8 and 128 ");
  if (passwordLength<8 || passwordLength>128) {
    alert("You did not choose a valid number")
    generatePassword();
  }

  // prompt for types
  let upperCaseConfirm = confirm("Would you like to include uppercase?");
  let lowerCaseConfirm = confirm("Would you like to include lowercase?");
  let specialCharacterConfirm = confirm("Would you like to include special characters?");
  let numberConfirm = confirm("Would you like to include numbers?");
  
    if (upperCaseConfirm) {
      mixMatch = mixMatch.concat(upperCase);
    }
    if (lowerCaseConfirm) {
      mixMatch = mixMatch.concat(lowerCase);
    }
    if (specialCharacterConfirm) {
      mixMatch =mixMatch.concat(specialCharacter)
    }  
    if (numberConfirm) {
      mixMatch = mixMatch.concat(number)
    } 
    
  var password = "";
  // loop for random password 
  for (var i=0; i<passwordLength; i++) {  
    randomNumber(0, passwordLength);
    let randomIndex= Math.floor(Math.random() * mixMatch.length);
    password += mixMatch[randomIndex]
    // console.log(mixMatch[password])
    console.log(password)
  };
  return password;
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

