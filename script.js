// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "123456789";
var specialChar = "!@#$%^&*()_?~;<>";

function generatePassword() {
  console.log("hey! you clicked the button!");

  var userSelection = ''; //stores user selected data
  var finalPassword = ''; //does this have to be inside function?

// 1. prompt the user for password criteria
//    a. password length 8 < 128
var characterLength = prompt("how many characters would you like your password to contain?");
if(characterLength < 8){
  alert("please pick a number between 8 and 128");
  return; // return command will stop the code from running if we dont get the input we want. 
}
if(characterLength > 128){
  alert("please pick a number between 8 and 128");
  return;
}

//    b. lowercase, uppercase, numbers, speacial characters
var lowerC = confirm("press OK if you want your password to contain lowercase letters");
if(lowerC === true){
userSelection = userSelection.concat(lowerCase) 
}
var upperC = confirm("press OK if you want your password to contain uppercase letters");
if(upperC === true){
  userSelection = userSelection.concat(upperCase) 
  }
var numb = confirm("press OK if you want you password to contain numbers");
if(numb === true){
  userSelection = userSelection.concat(number) 
  }
var spec = confirm("press OK if you want you password to contain a special character");
if(spec === true){
  userSelection = userSelection.concat(specialChar) //concat = joins strings together. 
  }
  console.log("userSelection = " + userSelection); //shows all stored data that was chosen (confirmed)

  for(i = 0; i < characterLength; i++){
    var randomIndex = Math.floor(Math.random() * userSelection.length);
    var random = userSelection[randomIndex];
    finalPassword = finalPassword.concat(random) 
  }
// 2. validate the input.
// 3. Generate pasword based on criteria.
return finalPassword;
}
// 4. display password to the page. 
  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
