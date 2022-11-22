/*
function hello () {
    console.log("Another string");
    return  "Hello functions";
}

console.log(hello());

function reusableFunction () {
    console.log("Hi World!")
}

reusableFunction();

function testFun(param1, param2) {
    console.log(param1, param2);
}

testFun("Russian", "Federation");
testFun("United", "States");
testFun("Costa", "Rica");

function functionWithArgs (a, b) {
    console.log (a + b);
};

functionWithArgs(1,2);
functionWithArgs(7,9);

let nyc = "New York";
function unitedStates () {
    let nv = "Nevada";
    let ca = "California";

    let al = "Alaska";
    var nameOfState = "United States of America"
   // console.log(nyc)

    return nameOfState
}

//console.log(unitedStates());
console.log(nyc)

function plusThree(num) {
    return num *= 5
}

console.log(plusThree(65));

const outerWear = "T-Shirt";

function myOutfit() {

    const outerWear = "sweater";

    return outerWear;
}
*/

//console.log(myOutfit());
//console.log(outerWear);

// Setup
//let sum = 0;

//function addThree() {
    //sum = sum + 3;
//}

// Only change code below this line

//function addFive () {
    //sum += 5;
//}

// Only change code above this line

//console.log(addThree());
//console.log(addFive());

function isTypeOf(value)  {
    if(typeof value === 'string'){
        return 'yes, this is a string'
    } else if (typeof value === 'number') {
        return 'this is a number'
    } else {
        return 'undefined'
    }
};
console.log(isTypeOf(665));

function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(99));