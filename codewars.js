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