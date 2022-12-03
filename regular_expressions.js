// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);
//
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // Change this line
// let result = petRegex.test(petString);
//
// let myString = "freeCodeCamp";
// // let fccRegex = /freecodecamp/i; // Change this line
// // let result = fccRegex.test(myString);
// //
// // console.log(result)
//
// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// huRegex.test(humStr);
// huRegex.test(hugStr);
//
// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
// bigStr.match(bgRegex);
// bagStr.match(bgRegex);
// bugStr.match(bgRegex);
// bogStr.match(bgRegex);
//
//
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/;
// let result = lastRegex.test(caboose);
//
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/;
// let result = calRegex.test(rickyAndCal);
//
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;
//
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g;
// let result = quoteSample.match(nonAlphabetRegex).length;
//
// let username = "JackOfAllTrades";
// let userCheck = /^[a-z]([a-z]+\d*|[\d][\d])$/ig;
// let result = userCheck.test(username);

// let american = "color";
// let british = "colour";
// let rainbowRegex= /colou?r/;
// rainbowRegex.test(american);
// rainbowRegex.test(british);
//
// let sampleWord = "astronaut";
// let pwRegex =/(?=\w{6})(?=\w*\d{2})/;;
// let result = pwRegex.test(sampleWord);
//
// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// checkPass.test(password);

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);

