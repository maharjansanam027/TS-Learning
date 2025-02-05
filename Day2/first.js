"use strict";
let obj2 = {
    name: "sanam",
    age: 22,
    gender: "male"
};
let obj4 = {
    name: "rohit",
    age: 25,
};
let arr = {
    age: 25,
    name: "sam karan"
};
// function in js
// if we give simly aargumment then it will take any
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
function meet(msg, value) {
    console.log(msg, value);
}
console.log(meet("sanam", 25));
// default parameter
function neet(msg = "rohan") {
    console.log(msg);
}
neet();
// optional parameter
function optional1(msg) {
    console.log(msg || "hello boss");
}
optional1();
// rest operator using by ...arr
function array4(...arr) {
    let ans = 0;
    arr.forEach((val) => {
        ans = ans + val;
    });
    return ans;
}
console.log(array4(2, 5, 9, 8, 8, 10, 52, 66));
