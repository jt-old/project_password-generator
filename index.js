// create array of all possible characters
/* possible characters */
const characters = [
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

// set isAlive boolean
let isAlive = false
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

/* If there aren't already passwords, generate passwords, otherwise clear passwords and generate new passwords */
function generatePasswords() {
  if (isAlive === false) {
    generatePasswordOne()
    generatePasswordTwo()
    isAlive = true
  }
}

/* create random index between 0 and the length of the characters array to use as index number*/
function createRandomIndex() {
  let randomIndex = Math.floor(Math.random() * characters.length)
  return randomIndex
}

/* generate password one */
function generatePasswordOne() {
  for (let i = 0; i < passwordLength; i++) {
    // call random index function and in variable
    let randomIndex = createRandomIndex()
    // push the random index onto the array
    passwordOneArr.push(characters[randomIndex])
  }
  // loop through the array 15 times and display the characters[randomIndex] in the textContent
  for (let i = 0; i < passwordLength; i++) {
    passwordOne.textContent += passwordOneArr[i]
  }
}

/* generate password two */
function generatePasswordTwo() {
  for (let i = 0; i < passwordLength; i++) {
    // call random index function and in variable
    let randomIndex = createRandomIndex()
    // push the random index onto the array
    passwordTwoArr.push(characters[randomIndex])
  }
  // loop through the array 15 times and display the characters[randomIndex] in the textContent
  for (let i = 0; i < passwordLength; i++) {
    passwordTwo.textContent += passwordTwoArr[i]
  }
}
