// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Define Criteria Arrays
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = String(lowercase).toUpperCase().split(",");
var specialChar = ["!", "#", "$", "'", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var securePassword = '';

// Begin function
function generatePassword() {
  // Remove any previously generated password?
  
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

    // Full Criteria
    if (userLowercaseChoice && userUppercaseChoice && userNumericChoice && userSpecialCharChoice) {
      
      for(var i=0; i < passwordLength; i++) {

      // Generate Random Pick for Each Crtieria
      var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
      var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
      var randomNum = Math.floor((Math.random() * 9));
      var randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];

      // Generate Random Array of each Random Criteria  
      var criteriaArrayFull = [randomNum, randomLowercase, randomUppercase, randomSpecialChar];

      var securePasswordFull = criteriaArrayFull[Math.floor(Math.random() * criteriaArrayFull.length)];

      securePassword += securePasswordFull;
      }
    }

    // Lowercase only
    else if (userLowercaseChoice && userUppercaseChoice === false && userNumericChoice === false && userSpecialCharChoice === false) {
  
      for(var i=0; i < passwordLength; i++) {

      // Generate Random Pick for Crtieria
      var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];

      var securePasswordFull = randomLowercase;

      securePassword += securePasswordFull;
      }
    }

    // Uppercase only
    else if (userLowercaseChoice === false && userUppercaseChoice && userNumericChoice === false && userSpecialCharChoice === false) {

      for(var i=0; i < passwordLength; i++) {

      // Generate Random Pick for Crtieria
      var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];

      var securePasswordFull = randomUppercase;

      securePassword += securePasswordFull;
      }
    }

    // Numbers only
    else if (userLowercaseChoice === false && userUppercaseChoice === false && userNumericChoice && userSpecialCharChoice === false) {

      for(var i=0; i < passwordLength; i++) {

      // Generate Random Pick for Crtieria
      var randomNum = Math.floor((Math.random() * 9));

      var securePasswordFull = randomNum;

      securePassword += securePasswordFull;
      }
    }

    // Special Characters only
    else if (userLowercaseChoice === false && userUppercaseChoice === false && userNumericChoice === false && userSpecialCharChoice) {

      for(var i=0; i < passwordLength; i++) {

      // Generate Random Pick for Crtieria
      var randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];

      var securePasswordFull = randomSpecialChar;

      securePassword += securePasswordFull;
      }
    }

    // Exclude Lowercase only
    else if (userLowercaseChoice === false && userUppercaseChoice && userNumericChoice && userSpecialCharChoice) {
  
      for(var i=0; i < passwordLength; i++) {

      // Generate Random Pick for Each Crtieria
      var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
      var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
      var randomNum = Math.floor((Math.random() * 9));
      var randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];

      // Generate Random Array of each Random Criteria  
      var criteriaArray = [randomNum, randomUppercase, randomSpecialChar];

      var securePasswordFull = criteriaArray[Math.floor(Math.random() * criteriaArray.length)];

      securePassword += securePasswordFull;
      }
    }

    // Exclude Uppercase only
    else if (userLowercaseChoice && userUppercaseChoice === false && userNumericChoice && userSpecialCharChoice) {

      for(var i=0; i < passwordLength; i++) {

      // Generate Random Pick for Each Crtieria
      var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
      var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
      var randomNum = Math.floor((Math.random() * 9));
      var randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];

      // Generate Random Array of each Random Criteria  
      var criteriaArray = [randomNum, randomLowercase, randomSpecialChar];

      var securePasswordFull = criteriaArray[Math.floor(Math.random() * criteriaArray.length)];

      securePassword += securePasswordFull;
      }
    }

    // Exclude Numbers only
    else if (userLowercaseChoice && userUppercaseChoice && userNumericChoice === false && userSpecialCharChoice) {

      for(var i=0; i < passwordLength; i++) {

      // Generate Random Pick for Each Crtieria
      var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
      var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
      var randomNum = Math.floor((Math.random() * 9));
      var randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];

      // Generate Random Array of each Random Criteria  
      var criteriaArray = [randomUppercase, randomLowercase, randomSpecialChar];

      var securePasswordFull = criteriaArray[Math.floor(Math.random() * criteriaArray.length)];

      securePassword += securePasswordFull;
      }
    }

    // Exclude Special Chracters only
    else if (userLowercaseChoice && userUppercaseChoice && userNumericChoice && userSpecialCharChoice === false) {

      for(var i=0; i < passwordLength; i++) {

      // Generate Random Pick for Each Crtieria
      var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
      var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
      var randomNum = Math.floor((Math.random() * 9));
      var randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];

      // Generate Random Array of each Random Criteria  
      var criteriaArray = [randomUppercase, randomLowercase, randomNum];

      var securePasswordFull = criteriaArray[Math.floor(Math.random() * criteriaArray.length)];

      securePassword += securePasswordFull;
      }
    }

    // Lowercase and Uppercase only
    else if (userLowercaseChoice && userUppercaseChoice && userNumericChoice === false && userSpecialCharChoice === false) {

      for(var i=0; i < passwordLength; i++) {

      // Generate Random Pick for Each Crtieria
      var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
      var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
      var randomNum = Math.floor((Math.random() * 9));
      var randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];

      // Generate Random Array of each Random Criteria  
      var criteriaArray = [randomUppercase, randomLowercase];

      var securePasswordFull = criteriaArray[Math.floor(Math.random() * criteriaArray.length)];

      securePassword += securePasswordFull;
      }
    }

    // Lowercase and Numbers only
    else if (userLowercaseChoice && userUppercaseChoice === false && userNumericChoice && userSpecialCharChoice === false) {

      for(var i=0; i < passwordLength; i++) {

      // Generate Random Pick for Each Crtieria
      var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
      var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
      var randomNum = Math.floor((Math.random() * 9));
      var randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];

      // Generate Random Array of each Random Criteria  
      var criteriaArray = [randomNum, randomLowercase];

      var securePasswordFull = criteriaArray[Math.floor(Math.random() * criteriaArray.length)];

      securePassword += securePasswordFull;
      }
    }

    // Lowercase and Special Characters only
    else if (userLowercaseChoice && userUppercaseChoice === false && userNumericChoice === false && userSpecialCharChoice) {

      for(var i=0; i < passwordLength; i++) {

      // Generate Random Pick for Each Crtieria
      var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
      var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
      var randomNum = Math.floor((Math.random() * 9));
      var randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];

      // Generate Random Array of each Random Criteria  
      var criteriaArray = [randomSpecialChar, randomLowercase];

      var securePasswordFull = criteriaArray[Math.floor(Math.random() * criteriaArray.length)];

      securePassword += securePasswordFull;
      }
    }

    // Uppercase and Numbers only
    else if (userLowercaseChoice === false && userUppercaseChoice && userNumericChoice && userSpecialCharChoice === false) {

      for(var i=0; i < passwordLength; i++) {

      // Generate Random Pick for Each Crtieria
      var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
      var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
      var randomNum = Math.floor((Math.random() * 9));
      var randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];

      // Generate Random Array of each Random Criteria  
      var criteriaArray = [randomNum, randomUppercase];

      var securePasswordFull = criteriaArray[Math.floor(Math.random() * criteriaArray.length)];

      securePassword += securePasswordFull;
      }
    }

    // Special Characters and Uppercase only
    else if (userLowercaseChoice === false && userUppercaseChoice && userNumericChoice === false && userSpecialCharChoice) {

      for(var i=0; i < passwordLength; i++) {

      // Generate Random Pick for Each Crtieria
      var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
      var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
      var randomNum = Math.floor((Math.random() * 9));
      var randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];

      // Generate Random Array of each Random Criteria  
      var criteriaArray = [randomUppercase, randomSpecialChar];

      var securePasswordFull = criteriaArray[Math.floor(Math.random() * criteriaArray.length)];

      securePassword += securePasswordFull;
      }
    }

    // Special Characters and Numbers only
    else if (userLowercaseChoice === false && userUppercaseChoice === false && userNumericChoice && userSpecialCharChoice) {

      for(var i=0; i < passwordLength; i++) {

      // Generate Random Pick for Each Crtieria
      var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
      var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
      var randomNum = Math.floor((Math.random() * 9));
      var randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];

      // Generate Random Array of each Random Criteria  
      var criteriaArray = [randomNum, randomSpecialChar];

      var securePasswordFull = criteriaArray[Math.floor(Math.random() * criteriaArray.length)];

      securePassword += securePasswordFull;
      }
    }

    // If no criteria selected
    else {
      alert("You must select at least 1 criteria. Please start over.");
    }
    
    return securePassword;
  }
  else {
    alert("Password must be between 8-128 characters. Please start over.");

  }
}