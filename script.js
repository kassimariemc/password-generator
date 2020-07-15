// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // Create error message 
  if(password.errorMessage) {
    return false
  }
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Define Criteria Arrays
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = String(lowercase).toUpperCase().split(",");
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ["!", "#", "$", "'", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Begin function
function generatePassword() {
  // Convert to string
  var securePassword = '';
  var criteriaArray = [];

  // Initial Prompt
  var UserPasswordLength = prompt("How long would you like your secure password to be?" + "\nMust be between 8-128 characters");

  // Convert user password length to integer
  var passwordLength = parseInt(UserPasswordLength);

  // Password length must be between 8-128
  if (passwordLength > 7 && passwordLength < 129) {
    
    // Store user password criteria
    var userLowercaseChoice = confirm("Would you like your password to include lowercase characters?");

    var userUppercaseChoice = confirm("Would you like your password to include uppercase characters?");

    var userNumericChoice = confirm("Would you like your password to include numbers?");

    var userSpecialCharChoice = confirm("Would you like your password to include special characters (i.e. !$#@)?");

    // Add criteria to password array if selected by user
    if (userLowercaseChoice) {
      criteriaArray = criteriaArray.concat(lowercase);
    }

    if (userUppercaseChoice) {
      criteriaArray = criteriaArray.concat(uppercase);
    }

    if (userNumericChoice) {
      criteriaArray = criteriaArray.concat(numbers);
    }

    if (userSpecialCharChoice) {
      criteriaArray = criteriaArray.concat(specialChar);
    }
    
    // If no criteria selected
    if(!userLowercaseChoice && !userUppercaseChoice && !userNumericChoice && !userSpecialCharChoice) {
      alert("You must select at least 1 criteria. Please start over.");
      return 'No criteria selected';
    }

    // Create password
    for(var i = 0; i < passwordLength; i++) {
    securePassword += criteriaArray[Math.floor(Math.random() * criteriaArray.length)];
    }
    
    return securePassword;
  }

  // If password length selected not within 8-128
  else {
    alert("Password must be between 8-128 characters. Please start over.");
    return 'Invalid password length';
  }
}