
// string of characters which can be used within password
const lowerCasedCharacters = ["abcdefghijklmnopqrstuvwxyz"];
const upperCasedCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const numericCharacters = ["0123456789"];
const specialCharacters = ["@$%&*+?/!~_-"];

function getPasswordOptions() {
    var length = prompt("Select password length between 8-128 characters?");
    // answers to below will create booleans
    var includeLowercase = confirm("Include lowercase letters?");
    var includeUppercase = confirm("Include UPPERCASE letters?");
    var includeNumbers = confirm("Include numbers?");
    var includeSpecialChar = confirm("Include special characters?");

    //   below checks if user has entered a number between 8-128 and returns alert if not. 
    // need it to loop back to first prompt if criteria not met
    if (isNaN(length) || length < 8 || length > 128 || !includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChar) {
        alert("Length must be between 8 and 128 and at least one character type must be selected.");
        return;
    }
}

getPasswordOptions()

// create function to generate password
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChar) {

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
        randomPassword += userNeeds[randomIndex]
    }

}



generatePassword();

//     const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChar);
console.log(password);