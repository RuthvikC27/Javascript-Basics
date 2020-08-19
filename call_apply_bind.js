// CALL 

var obj = {num: 2}

var addToThis = function(a, b, c){
    return this.num + a + b + c;
};

// console.log(addToThis.call(obj, 2))
// console.log(addToThis.call(obj, 1, 2, 3))

// Apply
var obj2 = {num: 5}

var arr = [1, 2, 3]
// console.log(addToThis.apply(obj, arr))
// console.log(addToThis.apply(obj2, arr))

// Above two attaches the object to the function till thier execution
//  Bind
var arr = [1, 2, 3]

obj2 = {num: 5}
var bound = addToThis.bind(obj2)
// console.dir(bound(1,2,3))

console.log(bound(1, 2, 3))