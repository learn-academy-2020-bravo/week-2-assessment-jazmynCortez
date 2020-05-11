// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// // Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"
//create a function that will use modulo, first if will check to see if its divisible by 3 and return the number is divisible by three
const divisibleChecker = (num) => {
  if (num % 3 === 0){
    return `${num} is divisible by 3`
  }
  //else if will show what will be returned if the number is not divisible by 3
    else if (num % 3 !== 0) {
    return `${num} is not divisiable by 3`
//catch all statement that will show if the code works or not
  } else {
    return "broken"
  }
}
//call the code using 3 different console logs
console.log(divisibleChecker(15));
console.log(divisibleChecker(0))
console.log(divisibleChecker(-7))

// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
//I use the .map method
//use the .toUpperCase method too
//console log it
upperCaseLetters = (randomNouns)
  for (var i = 0; i < randomNouns.length; i++) {
    randomNouns[i] = randomNouns.map(i => i.toUpperCase)
 // return (randomNouns.toUpperCase)
}
console.log(randomNouns)


// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// // Expected output: [-8, 0, 8, 46, 59, 90, 107]
//
const noWords = (value) => {
  let words = [null, undefined, true, false, ""]
  let array = words.split()
  return array.filer(value => words.indexOf(value) === -1).join()
}
console.log(noWords(mixedDataArray))

// // --------------------4) Create a function that takes in a string and logs the index of the first vowel.
//
var vowelTester1 = "learn"
// // Expected output: 1
// var vowelTester2 = "throw"
// // Expected output: 3
//create a for loop
//use indexOf method
//input what my vowels are
//
const firstVowel = (string) => {
let vowels = {"a", "e", "i", "o", "u"}
return(string.indexOf(vowels))
}
console.log(firstVowel(vowelTester1))




// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"
//im going to use a for loop
//im guessing I can type in two num as variables and symbol within the argument
//I will take my code I have already written for the modulo question and modify it here
const divisibleChecker = (num1, symbol, num2) => {
  if (num1 % num2 === 0){
    return `${num1} is divisible by ${num2}`
  }
  //else if will show what will be returned if the number is not divisible by 3
    else if (num1 % num2 !== 0) {
    return `${num1} is not divisiable by ${num2}`
//catch all statement that will show if the code works or not
    } else if (num1 * num2) {
      return `${num1} * ${num2}`
    }
      else if (num1 - num2){
      return `${num1} - ${num2}`

    } else if (num1 / num2){
      return `${num1} / ${num2}`

    } else {
      return "Can't devide by 0"
}



// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
