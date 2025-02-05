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

const p1 = new Person("sanam",25);
const p2 = new Person("rohit",20);

console.log(p1);
console.log(p2);

p1.greet2();

// console.log(p1.greet1())