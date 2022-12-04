// let simpleArray = ['one', 2, 'three', true, false, undefined, null];
// console.log(simpleArray.length);

// let ourArray = ["a", "b", "c"];
// let ourVariable = ourArray[0];
// ourArray[1] = "not b anymore";


function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7,'VIII', 'nine');


    return arr;
}

function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2 , 'three');
    arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));