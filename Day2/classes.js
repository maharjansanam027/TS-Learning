class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet2() {
        console.log(`hi ${this.name}`);
    }
}
// public private protected
class Customer extends Person {
    constructor(salary, name, age) {
        super(name, age);
        this.salary1 = salary;
    }
}
const p1 = new Person("sanam", 25);
const p2 = new Person("rohit", 20);
const p3 = new Customer(25000, "negi", 23);
console.log(p1);
console.log(p2);
p1.greet2();
console.log(p3);
// console.log(p1.greet1())
