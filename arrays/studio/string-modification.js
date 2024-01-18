const input = require('readline-sync');
let str = "LaunchCode";
let userInput = input.question("Choose the number of letters to be relocated ") || 3

while (userInput > str.length || userInput < 0) {
    userInput = input.question(`Choose the number of letters to be relocated. (Must be a positive number less than or equal to  ${str.length} `) || 3
}

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let slice = str.slice(userInput)
let newStr = slice + str.slice(0,userInput)

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${newStr} used to say ${str}`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
