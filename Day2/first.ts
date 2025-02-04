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

