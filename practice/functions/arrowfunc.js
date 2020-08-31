const arrowFunc = () => {
    this.a = 10
    console.log("Arrow function this -> ", this)
}

// arrowFunc()

function namedFunc(){
    const a = 10;
    console.log("Named function this -> ", this)
}

this.a = 'global';

// namedFunc()

const obj = {
    a: 'object',
    namedFunc: namedFunc,
    arrowFunc: arrowFunc,
    embedNamedArrow: function(){
        console.log("Named function (this) -> ", this)

        const arrow = () => {
            console.log("Named function inside arrow function (this) -> ", this)
        }
        return arrow()
    },
    embedNamedOnly: function(){
        // console.log("Named function (this) -> ", this)

        const named = function(){
            this.a = "nested func"
            console.log("Named function inside named function (this) -> ", this)
        }
        return named()
    }
}


// obj.namedFunc()
// obj.arrowFunc() 
// //  for arrow function there is no binding
// obj.embedNamedArrow()
obj.embedNamedOnly()

// console.log(this.a)