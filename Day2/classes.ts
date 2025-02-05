class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    greet2():void{
        console.log(`hi ${this.name}`);
    }

}


// public private protected
class Customer extends Person{
    salary1:number;

    constructor(salary:number,name:string,age:number){
        super(name,age);
        this.salary1 = salary;
    }


}

const p1 = new Person("sanam",25);
const p2 = new Person("rohit",20);
const p3 = new Customer(25000,"negi",23);

console.log(p1);
console.log(p2);

p1.greet2();

console.log(p3);

// console.log(p1.greet1())

// Generic Template

// function value(val:(number | string | number[])):(number | string | number[]){
//     return val;
// }

function value<T>(a:T):T{
    return a;
}

console.log(value("sanam"));
console.log(value([2,6,5,8,4,2,6]));


interface Admin<T>{
    name:string,
    age:number,
    aadharNo:T
}

const obj6:Admin<number> = {
    name:"sanam",
    age:25,
    aadharNo:25
} 