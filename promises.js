// EXAMPLE 1

// let courseInfo = new Promise(function(resolve, reject){

//     let isClean = false;

//     if(isClean){
//         resolve('present');
//     }else{
//         reject('not present');
//     }

// })

// courseInfo.then(function(fromResolve){
//     console.log("course is " + fromResolve)
// }).catch(function(fromResject){
//     console.log(fromResject)
// })

// EXAMPLE 2

let cleanRoom = function(){
    return new Promise(function(resolve, reject){
        resolve('cleaned the room');
    })
}

let removeGarbage = function(p){
    return new Promise(function(resolve, reject){
        resolve('remove Garbage');
    })
}

let winIcecream = function(p){
    return new Promise(function(resolve, reject){
        resolve('won icecream');
    })
}

// cleanRoom().then(function(result){
//     console.log(result)
//     return removeGarbage();
// }).then(function(result){
//     console.log(result)
//     return winIcecream()
// }).then(function(result){
//     console.log(result)
//     console.log("Finished")
// })

// EXAMPLE 3
Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
    console.log('all finished')
})

// EXAMPLE 4
Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
    console.log('One of them finished')
})