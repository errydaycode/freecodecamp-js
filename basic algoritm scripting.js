
// Convert from celsius to fahrenheit
function convertCtoF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

convertCtoF(30);

// Reverse a string
const reverseString = (str) => str.split('').reverse().join('');

// Factorialize a Number
function factorialize(num) {
    let factorial = 1;
    while (num > 0) {
        factorial *= num;
        num --
    }
    return factorial;
}

console.log(factorialize(5));

// Vowel count

function getCount(str) {
    let vowelRegex = /[aeiou]/ig;
    let result = str.match(vowelRegex);
    return result?.length || 0 ;
};