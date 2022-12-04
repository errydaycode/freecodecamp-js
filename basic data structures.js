// let simpleArray = ['one', 2, 'three', true, false, undefined, null];
// console.log(simpleArray.length);

// let ourArray = ["a", "b", "c"];
// let ourVariable = ourArray[0];
// ourArray[1] = "not b anymore";
//
//
// function mixedNumbers(arr) {
//     arr.unshift('I', 2, 'three');
//     arr.push(7,'VIII', 'nine');
//
//
//     return arr;
// }
//
// function mixedNumbers(arr) {
//     // Only change code below this line
//     arr.unshift('I', 2 , 'three');
//     arr.push(7, 'VIII', 9);
//     // Only change code above this line
//     return arr;
// }
//
// console.log(mixedNumbers(['IV', 5, 'six']));
//
// function popShift(arr) {
//     let popped = arr.pop(); // Change this line
//     let shifted = arr.shift(); // Change this line
//     return [shifted, popped];
// }
//
// console.log(popShift(['challenge', 'is', 'not', 'complete']));
//
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// arr.splice(0,1);
// arr.splice(3,4);
// console.log(arr);
//
// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 2;
//
// numbers.splice(startIndex, amountToDelete, 13, 14, 15, 16, 17, 18, 19, 20, 'etc');
// console.log(numbers);

function forecast(arr) {

    let weather = arr.slice(2,4)
    return weather;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr])
        // Only change code above this line
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));