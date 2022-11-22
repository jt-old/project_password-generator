const generatePwBtn = document.querySelector('.generate-pw-btn')
const displayPws = document.querySelector('.display-pw-container')
const displayPw = document.querySelectorAll('.pw-display')
const changePwLength = document.querySelector('.change-pw-length')

const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
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
  '*',
  '&',
  '$',
  '#',
  '!',
  '?',
  '<',
  '>',
  '+',
]

const num = changePwLength.min
changePwLength.value = num

generatePwBtn.addEventListener('click', renderPw)
changePwLength.addEventListener('input', () => (num = changePwLength.value))

function renderPw() {
  let Pws = generatePw(num)
  for (let i = 0; i < displayPw.length; i++) {
    displayPw[i].textContent = Pws[i]
  }
}

function generatePw(num = 8) {
  const pwArr = []

  for (let j = 1; j <= 4; j++) {
    let resultStr = ''
    for (let i = 1; i <= num; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length)
      resultStr += characters[randomIndex]
    }
    pwArr.push(resultStr)
  }
  return pwArr
}
