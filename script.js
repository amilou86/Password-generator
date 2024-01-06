// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// // Function to prompt user for password options
function getPasswordOptions() {
    var length = prompt("Select password length between 8-128 characters?");
    // answers to below will create booleans
    var lowercase = confirm("Include lowercase letters?");
    var uppercase = confirm("Include UPPERCASE letters?");
    var numbers = confirm("Include numbers?");
    var specialChar = confirm("Include special characters?");

    //   below checks if user has entered a number between 8-128 and returns alert if not. 
    // But does it force at least 1 character type to be selected? and will it keep looping back until those conditions are met? 
    if (isNaN(length) || length < 8 || length > 128 || !lowercase && !uppercase && !numbers && !specialChar) {
        alert("Length must be between 8 and 128 and at least one character type must be selected.");
        return;

    }

    //  ** ARE THOSE PROMPTS ABOVE GLOBAL OR ONLY LOCAL TO ABOVE FUNCTION? **

    // create a new array based on user input to meet their password needs
    var userNeeds = [];

    // conditionally call the functions created below to store the result 

    //  *** DOES IT MATTER THAT FUNCTION IS BELOW/AFTER THESE IF STATEMENTS?**
    // ** IF IT DOES MATTER, COULD I PUT THE FUNCTION WITHIN EACH IF STATEMENT INSTEAD? **
    if (lowercase) {
        var randomLowerLetter = getRandomLower();
        userNeeds.push(randomLowerLetter);
    }

    //   repeat above with all password character options
    if (uppercase) {
        var randomUpperLetter = getRandomUpper();
        userNeeds.push(randomUpperLetter);
    }

    if (numbers) {
        var randomNumber = getRandomNumeric();
        userNeeds.push(randomNumber);
    }

    if (specialChar) {
        var randomSpecial = getRandomSpecial();
        userNeeds.push(randomSpecial);
    }

    // Function for getting a random element from an array
    function getRandomSpecial() {
        // line below selects a random index from the specialCharacters array
        var randSpecIndex = Math.floor(Math.random() * specialCharacters.length);
        // line below holds/accesses the actual element at the randomly selected index from above
        var randSpecElement = specialCharacters[randSpecIndex];
    }

    function getRandomNumeric() {
        // as above for numericCharacters
        var randomNumIndex = Math.floor(Math.random() * numericCharacters.length);
        var randomNumElement = numericCharacters[randomNumIndex];
    }

    function getRandomLower() {
        // as above for lowerCasedCharacters
        var randomLowerIndex = Math.floor(Math.random() * lowerCasedCharacters.length);
        var randomLowerElement = lowerCasedCharacters[randomLowerIndex];
    }

    function getRandomUpper() {
        // as above for upperCasedCharacters
        var randomUpperIndex = Math.floor(Math.random() * upperCasedCharacters.length);
        var randomUpperElement = upperCasedCharacters[randomUpperIndex];
    }

    // array created based on user input but adds the entire array contents to new the new array? is this better than the userNeeds array which only include random selected element?
    //   I need the password to be the user specified length, unsure how to achieve that?
    / var selectedCharTypes = [];
    if (lowercase) selectedCharTypes.push("lowercase");
    if (uppercase) selectedCharTypes.push("uppercase");
    if (numbers) selectedCharTypes.push("numbers");
    if (specialChar) selectedCharTypes.push("specialChar");


    // // Function to generate password with user input
    function generatePassword() {

    }

    // // Get references to the #generate element
    var generateBtn = document.querySelector('#generate');

    // // Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector('#password');

        passwordText.value = password;
    }

    // // Add event listener to generate button
    generateBtn.addEventListener('click', writePassword);