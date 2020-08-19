// var vals = Array(5).fill(0).map(() => Math.random());
var vals = [1, 2, 3, 4, 5]
vals = vals.reduce((acc, val) => {
    console.log(acc)
    return acc + val
}, 10)
console.log(vals)