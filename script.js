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
  
      if (isNaN(length) || length < 8 || length > 128 || !lowercase && !uppercase && !numbers && !specialChar) {
        alert("Length must be between 8 and 128 and at least one character type must be selected.");
        return;
        console.log(getPasswordOptions)
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
  
  // can I create an array of the user input, to the refer too to then use something that does 'if x selected, get random element from x character array?'
  // var selectedCharTypes = [];
  // if (lowercase) selectedCharTypes.push("lowercase");
  // if (uppercase) selectedCharTypes.push("uppercase");
  // if (numbers) selectedCharTypes.push("numbers");
  // if (specialChar) selectedCharTypes.push("specialChar");
  // // this would need to also remember the input for length?
  
  // // Function to generate password with user input
  // function generatePassword() {
  
  // }
  
  // // Get references to the #generate element
  // var generateBtn = document.querySelector('#generate');
  
  // // Write password to the #password input
  // function writePassword() {
  //   var password = generatePassword();
  //   var passwordText = document.querySelector('#password');
  
  //   passwordText.value = password;
  // }
  
  // // Add event listener to generate button
  // generateBtn.addEventListener('click', writePassword);