class Hello{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    namedFunc() {
        console.log("named function in class (this) -> ", this);
    }

    arrowFunc = () => {
        console.log("arrow function in class (this) -> ", this);
    }

    embedNamedOnly(){
        const c = 10;
        function namedFunc() {
            console.log("Named embed Named function (this) ->", this);
        }
        return namedFunc();
    }

    embedNamedAndArrow(){
        const c = 10;
        const arrowFunc = () => {
            console.log("Named embed Arrow function (this) ->", this);
        }
        return arrowFunc();
    }
}

const obj = new Hello(500, 400);

// obj.namedFunc();
// obj.arrowFunc();
obj.embedNamedOnly();
// obj.embedNamedAndArrow();