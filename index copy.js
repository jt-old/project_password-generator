// create array of all possible characters
/* possible characters */
const chars = [
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
  'Z',
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
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
]

// store text from id password one in variable
let passwordOne = document.getElementById('passwordOne')
// store text from id password two in variable
let passwordTwo = document.getElementById('passwordTwo')
// create empty array for passwordOne
let passwordOneArr = []
// create empty array for passwordTwo
let passwordTwoArr = []
// set password length
let passwordLength = 15

/* generate password one */
function generatePasswordOne() {
  for (let i = 0; i < passwordLength; i++) {
    // create random index and store and in variable
    let randomIndex = Math.floor(Math.random() * chars.length)
    // push the random index onto the array
    passwordOneArr.push(chars[randomIndex])
  }
  // loop through the array passwordLength times and display the passwordone array index character in the textContent
  for (let i = 0; i < passwordLength; i++) {
    passwordOne.textContent += passwordOneArr[i]
  }
}

/* generate password two */
function generatePasswordTwo() {
  for (let i = 0; i < passwordLength; i++) {
    // create random index and store and in variable
    let randomIndex = Math.floor(Math.random() * chars.length)
    // push the random index onto the array
    passwordTwoArr.push(chars[randomIndex])
  }
  // loop through the array 15 times and display the characters[randomIndex] in the textContent
  for (let i = 0; i < passwordLength; i++) {
    passwordTwo.textContent += passwordTwoArr[i]
  }
}

// set initial state
let isAlive = false

// toggle the isAlive boolean to true
// run the generate passwords function
// then toggle to false
function toggle() {
  if (isAlive === true) {
    // clear everything
    passwordOne.textContent = ''
    passwordTwo.textContent = ''
    // then run generate passwords
    generatePasswords()
  } else {
    // just run generate passwords
    generatePasswords()
  }
}

/* isAlive = isAlive ? false : true
  generatePasswords()
  isAlive = false */

/* If boolean is false (there aren't any passwords) then generate passwords */
function generatePasswords() {
  // run the functions
  generatePasswordOne()
  generatePasswordTwo()
  // set boolean state to true
  isAlive = true
}

/* Copy Password */
/* function copyPassword() {
  var copyText = document.getElementById('password')
  copyText.select()
  document.execCommand('copy')
} */
