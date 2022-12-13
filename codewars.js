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