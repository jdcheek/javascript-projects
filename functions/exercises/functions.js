console.log('-------------------------------------makeLine-------------------------------------')

function makeLine(size, char) {
  let output = '';
  for (let i = 0; i < size; i++) {
    output += char || '#'
  }
  return output;
}

console.log(makeLine(5, '$'))

console.log('-------------------------------------makeSquare-----------------------------------')

function makeSquare(size, char) {
  let output = ''
  for (let i = 0; i < size; i++) {
    output += makeLine(size, char) + '\n'
  }
  return output.slice(0, -1)
}

console.log(makeSquare(5, '&'))

console.log('-------------------------------------makeRectangle--------------------------------')

function makeRectangle(width, height, char) {
  let output = ''
  for (let i = 0; i < height; i++) {
    output += makeLine(width, char) + '\n'
  }
  return output.slice(0, -1)
}

console.log(makeRectangle(5, 3, '@'))

console.log('-------------------------------------makeDownwardStairs---------------------------')

function makeDownwardStairs(height, char) {
  let output = ''
  for (let i = 0; i < height; i++) {
    output += makeLine(i + 1, char) + '\n'
  }
  return output.slice(0, -1)
}

console.log(makeDownwardStairs(5, '%'))

console.log('-------------------------------------makeSpaceLine--------------------------------')

function makeSpaceLine(numSpaces, numChars, char) {
  let output = ''
  for (let i = 0; i < numSpaces; i++) {
    output += ' '
  }
  for (let i = 0; i < numChars; i++) {
    output += char || '#'
  }
  for (let i = 0; i < numSpaces; i++) {
    output += ' '
  }
  return output
}

console.log(makeSpaceLine(3, 5, '*'))

console.log('-------------------------------------makeIsoscelesTriangle------------------------')

function makeIsoscelesTriangle(height, char) {
  let output = ''
  for (let i = 0; i < height; i++) {
    output += makeSpaceLine(height - i - 1, 2 * i + 1, char) + '\n'
  }
  return output.slice(0, -1)
}

console.log(makeIsoscelesTriangle(5, '^'))

function makeInvertedTriangle(height, char) {
  let output = ''
  for (let i = 0; i < height; i++) {
    output += makeSpaceLine(height - i - 1, 2 * i + 1, char) + '\n'
  }
  let reversedOutput = ''
  for (let i = 0; i < output.length; i++) {
    reversedOutput = output[i] + reversedOutput
  }
  return reversedOutput.slice(0, -1)
}

console.log('-------------------------------------makeDiamond----------------------------------')

function makeDiamond(height, char) {
  let output = ''
  output += makeIsoscelesTriangle(height, char)
  output += makeInvertedTriangle(height, char)
  return output
}

console.log(makeDiamond(5, '%'))




















