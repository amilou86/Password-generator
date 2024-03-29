
// string of characters which can be used within password
const lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";
const upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericCharacters = "0123456789";
const specialCharacters = "@$%&*+?/!~_-";

function generatePassword() {
    // asks user prompts to confirm their password needs
    var length = prompt("Select password length between 8-128 characters?");
    var includeLowercase = confirm("Include lowercase letters?");
    var includeUppercase = confirm("Include UPPERCASE letters?");
    var includeNumbers = confirm("Include numbers?");
    var includeSpecialChar = confirm("Include special characters?");

    // Check if conditions are met
    if (!isNaN(length) && length >= 8 && length <= 128 && (includeLowercase || includeUppercase || includeNumbers || includeSpecialChar)) {

        // create string to hold character type selected by user, and empty password
        var userNeeds = '';
        var randomPassword = '';

        // concat character type if boolean is true
        if (includeLowercase) {
            userNeeds += lowerCasedCharacters;
        }

        if (includeUppercase) {
            userNeeds += upperCasedCharacters;
        }

        if (includeNumbers) {
            userNeeds += numericCharacters;
        }

        if (includeSpecialChar) {
            userNeeds += specialCharacters;
        }

        // create for loop to keep selecting random character from userNeeds string until meets the length specified by user and concat them to password string
        for (var i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * userNeeds.length);
            randomPassword += userNeeds[randomIndex];
        }
        return randomPassword;

    } else {
        alert("Length must be between 8 and 128, and at least one character type must be selected.");
    }

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
