// const myArray = [18, 64, 99];
// myArray[0] = 45;

/*const newArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];
*/
//const myData = newArray[2][1];

//const anotherArray = [["John", 23], ["cat", 2]];
//anotherArray.push(["dog", 3]);

//const myArray = [["John", 23], ["cat", 2]];
//const removedFromMyArray = myArray.pop();

//const myArray = [["John", 23], ["dog", 3]];
//const removedFromMyArray = myArray.shift();


//const myArray = [["John", 23], ["dog", 3]];
//myArray.shift();
//myArray.unshift(["Paul", 35]);


const myList = [
    ["AirWick", 1],
    ["Chicken", 2]

];

myList.push(
    ["Vaporizer", 1],
    ["Coke zero", 3]
);

myList.unshift(
    ["Vape Liquid", 1 ]
);
console.log(myList);

const getHiddenCard = (number, x = 4) => {

    return '*'.repeat(x) + number.slice(12)
};

getHiddenCard('1234567812345678');

const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

console.log(capitalize('petrovich'));

const isPensioner = (age) => age >= 60;

console.log(isPensioner(78));

const isInternationalPhone = (phone) => {
    const first = phone[0];
    return first === '+';
}

const isStrongPassword = (password) => {
    const length = password.length;
    return length > 8 && length < 20;
};

isStrongPassword('qwerty');

const isGoodApartment = (area, street) => {

    const result = area >= 100 || (area >= 80 && street === 'Main Street');
    return result;
};

console.log(isGoodApartment(64,'Main Street'));


const isLeapYear = (year) => {
    const result = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    return result;
};

console.log(isLeapYear(2016));

const isPalindrome = (word) => {
    const lowerword = word.toLowerCase();
    return lowerword === reverse(lowerword);
};

const isNotPalindrome = (word) => !isPalindrome(word);

const guessNumber = (guess) => {
    if (guess === 42) {
        return 'You win!';
    }

    return 'Try again!';
};


console.log(guessNumber(41));

const normalizeUrl = (site) => {
    let normalizedUrl;

    if (site.startsWith('https://')) {
        normalizedUrl = site;
    } else {
        normalizedUrl = `https://${site}`;
    }

    return normalizedUrl;
};


const whoIsThisHouseToStarks = (surname) => {

    let who;

    if (surname === 'Karstark' || surname ===  'Tally'){
        who = 'friend';
    } else if (surname === 'Lannister' || surname ===  'Frey') {
        who = 'enemy';
    } else {
        who = 'neutral';
    }
    return who;
};


console.log(whoIsThisHouseToStarks('listopad'));


const getNumberExplanation = (number) => {
    switch (number) {
        case 666:
            return 'devil number';
        case 42:
            return 'answer for everything';
        case 7:
            return 'prime number';
        default:
            return null;
    }
};
