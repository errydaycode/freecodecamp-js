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

// Make Code More Reusable with the this Keyword

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

// Define a Constructor Function
function Dog() {
    this.name = "Richi";
    this.color = "White";
    this.numLegs = 4;
}
// Use a Constructor to Create Objects
let hound = new Dog()

// extend constructors to receive arguments
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Alfa", "Red");

// Verify an Object's Constructor with instanceof

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House (1);

myHouse instanceof House;

// Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

// Use Prototype Properties to Reduce Duplicate Code

function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");