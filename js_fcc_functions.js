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


function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

function testSize(num) {
    // Only change code below this line
    if (num <5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15 ) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
        return "Huge"
    }
    // Only change code above this line
};

testSize(7);

// Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

    if (strokes === 1) {
        return names[0];
    } else if (strokes <= par -2){
        return names[1];
    }else if (strokes === par - 1) {
        return names[2];
    } else if (strokes === par){
        return names[3];
    }else if (strokes === par +1){
        return names[4];
    }else if (strokes === par +2){
        return names[5];
    }else if (strokes >= par + 3){
        return names[6];
    }

};

console.log(golfScore(4, 3));

function caseInSwitch(val) {
    let answer = "";
    switch(val){
        case 1:
            answer ="alpha"
            break;
        case 2:
            answer = "beta"
            break;
        case 3:
            answer = "gamma"
            break;
        case 4:
            answer = "delta"
            break;
    }

    return answer;
}

caseInSwitch(1);