
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

// Find the longest word

function findLongestWordLength(str) {
    let longestWord = "";
    let words = str.split(" ")
    for (let i = 0; i < words.length; i++) {
        if(words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// Find the shortest word
function findShort(s){
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i].length < smallest.length){
            smallest = arr[i];
        }
    }
    return smallest.length;
}