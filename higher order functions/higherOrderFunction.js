function setup(){

}

function sing(callback){
    console.log('la la la la');
    callback();
}

function meow(){
    console.log("meow meow")
}

sing(meow)

// function that accepts function 
// as a parameter or returns a function which is also called function factory 
// is a higher order function