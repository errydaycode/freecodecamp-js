// Create a Basic JavaScript Object
let dog = {
    name : "Richi",
    numLegs: 4
};

// Use Dot Notation to Access the Properties of an Object
let dog = {
    name: "Spot",
    numLegs: 4
};

console.log(dog.name);
console.log(dog.numLegs)

// Create a Method on an Object

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs : function() {
        return "This dog has " + dog.numLegs + " legs."
    }
};

dog.sayLegs();