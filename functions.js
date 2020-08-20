
//  Named function 

// function hello(){
//     return "Hello";
// }

// can be passed as an argument to another function
//  will be undefined

const hello = function(){
    return "Hello"
}

function sayHello(func){
    return func();
}

console.log(sayHello(hello));