function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
};

function Employee(name, age, jobTitle) {
    // Call the parent class constructor
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Set up inheritance from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
