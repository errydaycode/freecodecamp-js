
// Convert from celsius to fahrenheit
function convertCtoF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

convertCtoF(30);

// Reverse a string
const reverseString = (str) => str.split('').reverse().join('');

// Factorialize a Number
function factorialize(num) {
    let factorial = 1;
    while (num > 0) {
        factorial *= num;
        num --
    }
    return factorial;
}

console.log(factorialize(5));

// Vowel count

function getCount(str) {
    let vowelRegex = /[aeiou]/ig;
    let result = str.match(vowelRegex);
    return result?.length || 0 ;
};

// Find the longest word

function findLongestWordLength(str) {
    let longestWord = "";
    let words = str.split(" ")
    for (let i = 0; i < words.length; i++) {
        if(words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// Find the shortest word
function findShort(s){
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i].length < smallest.length){
            smallest = arr[i];
        }
    }
    return smallest.length;
}
//Codewars 8kuy task
function grabDoll(dolls){
    var bag=[];
    for (let i = 0; i < dolls.length; i++) {
        if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
            bag.push(dolls[i])
        }else continue;
        if (bag.length === 3) break;
    }
    return bag;
}
// Find the largest number in array;
function largestOfFour(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        let individualArr = arr[i];
        let innerMax = -Infinity;
        for (let j = 0; j < individualArr.length; j++){
            if(innerMax < individualArr[j]) {
                innerMax = individualArr[j]
            }
        }
        results.push(innerMax);
        console.log(results)

    }
    return results;
}
// Confirm the ending
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target
}

confirmEnding("Open sesame", "same");

// Repeat a string repeat a string
function repeatStringNumTimes(str, num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
}

repeatStringNumTimes("*", 8);

// Truncate a string
function truncateString(str, num) {
    if (num >= str.length) return str;

    return str.slice(0, num) + "...";
}

// Finders Keepers
function findElement(arr, func) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }

    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);


// BooWho FCC
const booWho = bool => typeof(bool) === "boolean" ? true : false;
console.log(booWho(false));

// Title Case a Sentence
function titleCase(str) {
    let words = str.toLowerCase().split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    return words.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

// Falsy Bouncer
function bouncer(arr) {
    return arr.filter(function(elem){
        return elem;
    })
}

bouncer([7, "ate", "", false, 9]);



// Slice & splice
function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Where do I Belong;

function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function(a, b){
        return a - b;
    })
    return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);

// Codewars 8kuy

function giveMeFive(obj){
    var five=[];
    for (var key in obj) {
        if (key.length==5) five.push(key);
        if (obj[key].length==5) five.push(obj[key]);
    }
    return five;
}

// Codewars Number Object's properties
function whatNumberIsIt(n){
    switch (true) {
        case (n==Number.MAX_VALUE): return "Input number is Number.MAX_VALUE";
        case (n==Number.MIN_VALUE): return "Input number is Number.MIN_VALUE";
        case (n==Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY";
        case (n==Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY";
        case (isNaN(n)): return "Input number is Number.NaN";
        default: return "Input number is " + n;

    }
}

