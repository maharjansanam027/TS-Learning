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