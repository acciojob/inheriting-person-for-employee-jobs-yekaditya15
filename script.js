// Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Employee class
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call the parent class constructor
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`;
    }
}

// Export classes for testing
window.Person = Person;
window.Employee = Employee;
