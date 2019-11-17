// house

this.table = "global table"
// console.log(this)

// function cleanTable(soap){
//     console.log(`cleaning ${this.table} using 
//     ${soap}`)
//     // console.log(this)
// }

this.garage = {
    table: 'garage table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
}

let ruthviksRoom = {
    table: "ruthvik table",
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
};

// cleanTable.call(this, 'some soap')
// cleanTable.call(this.garage, 'some soap')
// cleanTable.call(ruthviksRoom, 'some soap')

// console.log(this.ruthviksRoom.table) // not an global object
// console.log(ruthviksRoom.table) // it is a private object, so we cannot access it via this
// ruthviksRoom.cleanTable() // cleaning ruthvik table

// this.garage.cleanTable() // cleaning garage table


// function cleanTable(soap){
//     function innerFunction(_soap){
//         // console.log(this) // "this" is here global even though the outer function is set to bind "this"
//         console.log(`cleaning ${this.table} using ${soap}`)
//     }
//     innerFunction(soap);
// }

// we have three solution in order to fix this

// solution 1
// function cleanTable(soap){
//     const that = this
//     function innerFunction(_soap){
//         // console.log(this) // "this" is here global even though the outer function is set to bind "this"
//         console.log(`cleaning ${that.table} using ${soap}`)
//     }
//     innerFunction(soap);
// }

// cleanTable.call(this, 'some soap')

// // solution 2
// function cleanTable(soap){
//     function innerFunction(_soap){
//         // console.log(this) // "this" is here global even though the outer function is set to bind "this"
//         console.log(`cleaning ${this.table} using ${soap}`)
//     }
//     innerFunction.bind(this)(soap);
// }

// cleanTable.call(this, 'some soap')

//solution 3
// function cleanTable(soap){
//     const innerFunction = (_soap) => {
//         // console.log(this) // "this" is here global even though the outer function is set to bind "this"
//         console.log(`cleaning ${this.table} using ${soap}`)
//     }
//     innerFunction(soap);
// }

// cleanTable.call(this, 'some soap')

// solution 4 - can also use call method
// creating constructor
const createRoom = function(name){
    this.table = `${name} table`
}
createRoom.prototype.cleanTable = function(soap){
    console.log(`cleaning ${this.table} using 
    ${soap}`)
    // console.log(this)
}

// creating object of createRoom
const ruthvik = new createRoom('Ruthvik')
ruthvik.cleanTable('some soap')

// creating class

// class createRoom{
//     constructor(name){
//         this.table = name
//     }
//     cleanTable(soap){
//         // console.log(this.table)
//         console.log(`cleaning ${this.table} table using ${soap}`)
//     }
// }

// const yagnic = new createRoom('yagnic')
// yagnic.cleanTable('some soap')