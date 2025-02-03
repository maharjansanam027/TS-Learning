"use strict";
let age = 25;
let address = "bangalore";
// any
let obj;
obj = "hello";
obj = 25;
// unknown
let obj1;
obj1 = 25;
obj1 = "danam";
// for consume we should check which type
if (typeof obj1 === "string")
    console.log(obj1.toUpperCase());
