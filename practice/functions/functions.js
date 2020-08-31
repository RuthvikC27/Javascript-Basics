console.log("main ", this)

const a = "this is global a"

function hello(a, b, c){
    console.log(a + b + c) 
    console.log("Hello function", this.a)
}

// hello();

const obj = {
    a: "this is a",
    b: "this is b"
}

// hello.apply(obj, [1, 2, 3])

// hello.call(obj,1, 2, 3)

// hello()

// const bound = hello.bind(obj)
// bound(1, 2, 3)