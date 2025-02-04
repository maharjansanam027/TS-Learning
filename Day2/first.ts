interface Person{
    name:string,
    age:number,
    gender:string,

    // if we use question mark then it is optional
    aadharNo?:number
}

let obj2:Person = {
    name:"sanam",
    age:22,
    gender:"male"
}


// latest example

// utility types of objects

interface customer1{
    name:string,
    age:number,
    balance:number
}



let obj4:Partial <customer1> = {
    name:"rohit",
    age:25,
}

// partial :all properties become optional
// required :all properties become required
// Readonly :all properties become readonly not editable.


// array of objects


// we can define like this.
// let arr:{age:number,name:string}[] = [{age:20,name:"sanam"},{age:30,name:"rohit"}]

interface people {
    age:number,
    name:string
}

let arr:people = {
    age:25,
    name:"sam karan"
}

// function in js

// if we give simly aargumment then it will take any
function greet(a:number):number{
    console.log(a);
    return a+5;
}

console.log(greet(10));

function meet(msg:string,value:number){
    console.log(msg,value);
}

console.log(meet("sanam",25));

// default parameter
function neet(msg:string="rohan"){
    console.log(msg);
}

neet();

// optional parameter

function optional1(msg?:string){
    console.log(msg||"hello boss");
}

optional1();