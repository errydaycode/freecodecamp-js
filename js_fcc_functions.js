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


let count = 0;

function cc(card) {

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 7:
        case 8:
        case 9:
            count += 0;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;
    }


    var action = ""

    if(count > 0) {
        action ="Bet";
    } else {
        action = "Hold"
    }

    return `${count} ${action}`;

}

cc(2); cc(3); cc(7); cc('K'); cc('A');


//function phoneticLookup(val) {
//   let result = "";
//   switch(val) {
//     case "alpha":
//       result = "Adams";
//       break;
//     case "bravo":
//       result = "Boston";
//       break;
//     case "charlie":
//       result = "Chicago";
//       break;
//     case "delta":
//       result = "Denver";
//       break;
//     case "echo":
//       result = "Easy";
//       break;
//     case "foxtrot":
//       result = "Frank";
//       break;
//       default :
//         result = "huetasobachayavonuchaya";
//       break;
//   }

//   return result;
// }

// console.log(phoneticLookup("charlie"));

  /*  const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    return lookup[val];
};
console.log(phoneticLookup("echo"));

   */


// const myDog = {
//
//     "name": "Whiskers",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["Water", "Dogs"]
//
//
// };
//
// const testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
// };
//
//
// // const hatValue = testObj.hat ;
// // const shirtValue = testObj.shirt;
// //
// // const testObj = {
// //     "an entree": "hamburger",
// //     "my side": "veggies",
// //     "the drink": "water"
// // };
// //
// //
// // const entreeValue = testObj["an entree"]
// // const drinkValue = testObj["the drink"]
//
// const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };
//
// myDog["bark"] = "woof";
//
// const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
// };
//
//
// delete myDog.tails;
//
//
// function phoneticLookup(val) {
//     let result = "";
//
//
//     // switch(val) {
//     //   case "alpha":
//     //     result = "Adams";
//     //     break;
//     //   case "bravo":
//     //     result = "Boston";
//     //     break;
//     //   case "charlie":
//     //     result = "Chicago";
//     //     break;
//     //   case "delta":
//     //     result = "Denver";
//     //     break;
//     //   case "echo":
//     //     result = "Easy";
//     //     break;
//     //   case "foxtrot":
//     //     result = "Frank";
//     // }
//
//     const lookup = {
//         "alpha": "Adams",
//         "bravo": "Boston",
//         "charlie": "Chicago",
//         "delta": "Denver",
//         "echo": "Easy",
//         "foxtrot": "Frank"
//     }
//     result = lookup[val];
//
//     return result;
// }
//
// phoneticLookup("charlie");
//
// const myMusic = [
//     {
//         "artist": "Billy Joel",
//         "title": "Piano Man",
//         "release_year": 1973,
//         "formats": [
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "gold": true
//     },
//     {
//         "artist": "Miyagi",
//         "title": "Captain",
//         "release_year" : 2018,
//         "formats": [
//             "CD",
//             "mp3",
//             "vynil"
//         ]
//     }
//
// ];
//
// const myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };
//
// const gloveBoxContents = myStorage.car.inside["glove box"];
//
// const myPlants = [
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];
//
// const secondTree = myPlants[1].list[1];

// const ourArray = [];
// let i = 0;
//
// while (i < 5) {
//     ourArray.push(i);
//     i++;
// }
//
// const myArray = [];
// let i = 5;
//
// while(i >= 0) {
//     myArray.push(i);
//     i--;
// }
//
// const ourArray = [];
//
// for (let i = 0; i < 5; i++) {
//     ourArray.push(i);
// }
//
// const myArray = [];
// for (let i = 1; i <= 5; i++) {
//     myArray.push(i);
// }

// const ourArray = [];
//
// for (let i = 0; i < 10; i += 2) {
//     ourArray.push(i);
// }
//
// const myArray = [];
// for (let i = 1; i <= 9; i += 2) {
//     myArray.push(i);
// }


// const myArray = [];
// let i = 10;
//
//
// do {
//     myArray.push(i);
//     i++;
// } while (i < 5);
//
// console.log(myArray)
// let t = 0;
//
// function f1 () {
//     t++;
//     console.log(t);
//     f1()
// }
//
// f1();


// // ????????
// function f2 () {
//     let out = ' ';
//     for (i = 1; i <= 30; i++){
//         out += i + ' ';
//     }
//     console.log(out);
// }
//
// f2()
//
// // ????????????????
// let i = 0;
// let out = ' ';
// function f3() {
//     i++;
//     out += i + ' ';
//     if (i >= 30) return;
//     f3();
// }
//
// f3();
// console.log(out);

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let s1 = 0;
function moneyRecursion () {
    let m = randomInteger(0, 100);
    console.log('add:' + m);
    s1 += m;
    console.log('sum:' + s1);
    if (s1 > 300) return;
    moneyRecursion();
}

moneyRecursion();


// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];
// console.log(contacts[3]["firstName"])

function lookUpProfile(name, prop) {

    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}



console.log(lookUpProfile("Harry", "lastName"));


function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");

function checkSign(num) {
    return (num > 0) ? "positive"
        : (num === 0) ? "zero"
            : "negative";
}

checkSign(10);