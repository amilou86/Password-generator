
// create function to generate password
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChar) {

    // string of characters which can be used within password
    const lowerCasedCharacters = ["abcdefghijklmnopqrstuvwxyz"];
    const upperCasedCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    const numericCharacters = ["0123456789"];
    const specialCharacters = ["@$%&*+?/!~_-"];

    // create string to hold character type selected by user, and empty password
    var userNeeds = "";
    var password = "";

    // concat character type if boolean is true
    userNeeds += includeLowercase ? lowerCasedCharacters : "";
    userNeeds += includeUppercase ? upperCasedCharacters : "";
    userNeeds += includeNumbers ? numericCharacters : "";
    userNeeds += includeSpecialChar ? specialCharacters : "";

    // create for loop to keep selecting random character from userNeeds string until meets the length specified by user and concat them to password string
    for (var i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * userNeeds.length);
        password += userNeeds[randomIndex]
    }
    return '';
}

function getPasswordOptions() {
    var length = prompt("Select password length between 8-128 characters?");
    // answers to below will create booleans
    var includeLowercase = confirm("Include lowercase letters?");
    var includeUppercase = confirm("Include UPPERCASE letters?");
    var includeNumbers = confirm("Include numbers?");
    var includeSpecialChar = confirm("Include special characters?");

    //   below checks if user has entered a number between 8-128 and returns alert if not. 
    // But does it force at least 1 character type to be selected? and will it keep looping back until those conditions are met? 
    if (isNaN(length) || length < 8 || length > 128 || !includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChar) {
        alert("Length must be between 8 and 128 and at least one character type must be selected.");
        return;
    }
}


const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChar);

console.log(`Generated Password: ${password}`);