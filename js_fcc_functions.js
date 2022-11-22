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

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);

function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);

function orOperator (num) {
    if (num > 10 || num < 5) {
        return "outside 10 and 5";
    }
    return "inside 10 and 5";
};

console.log(orOperator(11));


function testLogicalAnd(val) {
    if (val <= 50 && val>= 25 ) {
        return "Yes";
    }
    return "No";
};

testLogicalAnd(10);