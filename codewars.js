// 7 kyu codewars
const squareDigits = num => +String(num).split('').map(e => (+e) ** 2).join('');
// 8 kyu codewars
const splitAndMerge =(string, separator) => string.split(' ').map(word => word.split('').join(separator)).join(' ')