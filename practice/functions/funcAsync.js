var x = function(){
    this.val = 1;
    setTimeout(function(){
        this.val++;
        console.log(this.val)
    }, 1)
}

x()

// method 1
var x = function(){
    var that = this
    this.val = 1;
    setTimeout(function(){
        that.val++;
        console.log(that.val)
    }, 1)
}

x()

// method 2
var x = function(){
    this.val = 1;
    setTimeout(() => {
        this.val++;
        console.log(this.val)
    }, 1)
}

x()