var arr = Array(100).fill('hello')
console.log(arr)

// if the argument in the fill is empty then the array is filled with 100 undefined's.
// you can pass a string or number as integer
// if the array is empty and insert or manipulate the array then map does not work
// instead first use fill and then map