function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};



const { today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;

class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }

    get temperature() {
        return (5 / 9) * (this.fahrenheit - 32);
    }

    set temperature(celsius) {
        this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}

const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase()
}

export { uppercaseString , lowercaseString};


import { uppercaseString, lowercaseString } from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

const makeServerRequest = new Promise((resolve, reject) => {

});

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if(responseFromServer) {
        resolve("We got the data").then(result => {
            console.log(result);
        });
    } else {
        reject("Data not received").catch(error => {
            concole.log(error);
        });
    }
});
