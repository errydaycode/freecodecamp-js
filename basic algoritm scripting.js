
// Convert from celsius to fahrenheit
function convertCtoF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

convertCtoF(30);

// Reverse a string
function solution(str){
    return str.split("").reverse().join("")
}