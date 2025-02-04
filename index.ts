let age = 25;

let address = "bangalore"


// any
let obj;
obj= "hello"
obj= 25;



// unknown

let obj1:unknown;

obj1=25;
obj1 = "danam";


// for consume we should check which type
if(typeof obj1 ==="string")
console.log(obj1.toUpperCase())

// Non primitive datartype

// array

let arr1:number[] = [2,5,6,8];

let arr2:(number | string)[] = ["sanam",25,25];

// tuple
// tuple is a also a array but fixed size

let arr3:[string,number]=["sanam",20];


// platform independent and platform dependent
// platform dependent means it depends on system
// architecture. 
// eg in c++ file, it generates the binary code depends on system 
// 01010111001010
// mac will read data by 8 bit or maybe 
// windows will read data by 10 bits


// in java we can run 1 time then we can use bytecode
// which is run in any system only need JVM
// Machine code can run fast


// in js it is also platform independent it only need brower not intermideate
// it is JIT language which is compiled time and run time


// TS is a Transilar which is conversion to js

// Objects

const person:{name:string,age:number,location:string}={
    name:"sanam",
    age:25,
    location:"bangalore"
}


// we can use this method
let person1:{name:string,age:number,gender:string};

person1 = {
    name:"sanam",
    age:25,
    gender:"male"
}


type customer ={
    cusId:string,
    name:string,
    age:25
}

let c1:customer = {
    cusId : "14CB",
    name:"sanam",
    age:25
}

// we can use this method also
// because it will merge if we created another interface same name
interface admin{
    names:string,
    age:number,
    position:string
}

interface admin{
    id:number
}

let obj3:admin = {
    names:"sujan",
    age:23,
    position:"senior developer",
    id:1
}