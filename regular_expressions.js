// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);

// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // Change this line
// let result = petRegex.test(petString);

// let myString = "freeCodeCamp";
// // let fccRegex = /freecodecamp/i; // Change this line
// // let result = fccRegex.test(myString);
// //
// // console.log(result)

// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// huRegex.test(humStr);
// huRegex.test(hugStr);

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);