// ECMAScript === European Computer Manufacturers Association Script

function setup(){
    // console.log(x); // if let then ReferenceError, if var then undefined
    var x = 100
    // let x = 100; 
    // var x = 100; var gets hoisted
    // console.log(x);
}

// let has block scope
// var has function scope

setup()

// console.log(i) // Reference error
function scope(){
    // console.log(i) // undefined
    var i = 100;
    // console.log(i) // 100
}
// console.log(i) //Reference error
scope()

// console.log(j) // undefined
for(var j=0; j<100; j++){
    
}
// console.log(j) // 100

// const 
const a = 100;
// a = 23 // TypeError - cannot assign to a constant
const arr = [1, 3, 4, 2]
arr[2] = 3
// console.log(arr) // in arrays it gets assigned
arr.push(100)
// console.log(arr) // adds 100 to end of the list
arr.pop()
// console.log(arr) // removes element at the end of list
// arr = [1, 2, 4] // TypeError: for recreating the same list

// objects
const particle = {
    x: 100,
    y: 100
}
particle.x = 10;
// console.log(particle) // can manipulate object items
particle.z = 20;
// console.log(particle) // can add new items in the object

// particle = {
//     x: 30
// } // TypeError: cannot recreate or assigned new object

// in lists and objects you cannot recreate the same object
// If you create then you will get typeError