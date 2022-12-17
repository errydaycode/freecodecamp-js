// 7 kyu codewars
const squareDigits = num => +String(num).split('').map(e => (+e) ** 2).join('');
// 8 kyu codewars
const splitAndMerge =(string, separator) => string.split(' ').map(word => word.split('').join(separator)).join(' ')
// 7 kyu codewars
function calculate(num1, operation, num2) {
    let result = null;
    switch (operation) {
        case "+" :
            result =   num1 + num2;
            break;
        case "-" :
            result = num1 - num2;
            break;
        case "*" :
            result = num1 * num2;
            break;
        case "/" :
            result = num1 / num2;
            break;

    }
    if (result === -Infinity) return null;
    return result
}

// 8 kyu BMI Calculator
function bmi(weight, height) {
    let h = Math.pow(height, 2)
    let result = weight / h;

    if (result <= 18.5) return "Underweight"
    if (result <= 25.0) return "Normal"
    if (result <= 30.0) return "Overweight"
    if (result > 30) return "Obese"


    // 8 kyu

    function lovefunc(flower1, flower2){
        return flower1 % 2 !== flower2 % 2;
    }
}

 // 8 kyu a needle in the Haystack

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

// 8 kyu fake binary
const fakeBin = x => x.split('').map(e => (e < 5 ? '0' : '1')).join('') ;

// 8 kyu

const hero = (bullets, dragons) => bullets / dragons >= 2 ? true : false



// 7 kyu descending order

// Your task is to make a function that can take any non-negative integer as an argument and return it
// with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 123456789 Output: 987654321

const descendingOrder = n =>
    Number(String(n).split('').sort((a,b) => b - a ).join(''))

// 7 kyu Highest and Lowest
function highAndLow(numbers){
    let nums = numbers.split(' ')
    return Math.max(...nums) + ' ' + Math.min(...nums);
}
// 7 kuy kata
String.prototype.toJadenCase = function (str) {
    return this.
    split(' ').
    map(word => word[0].toUpperCase() + word.slice(1)).
    join(' ')

};

// 7 kuy kata
function friend(friends){
    let result = [];
    for (let i of friends) {
        if (i.length === 4) {
            result.push(i);
        }
    }
    return result;
}

// 7 kuy kata
function filter_list(l) {
    return l.filter(v => typeof v == "number")
}

// 8 kuy Abbreviate a Two Word Name

const abbrevName = name => name.toUpperCase().split(' ').map(x => x[0]).join('.')

// 8 kuy kata Double Char

// "abcd" return "aabbccdd"

function doubleChar(str) {
    return str.split('').map(e => e+e ).join('')
}

// 7 kuy

const stray = (numbers,sort = numbers.sort()) =>
    sort[0] == sort[1] ? sort[sort.length - 1] : sort[0]

