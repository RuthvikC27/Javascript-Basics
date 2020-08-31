function variablesFunc() {
    const a = 10;
    // this.a = 20;
    console.log("Named function this -> ", this.a);
}

variablesFunc()

// declaring variables doen't appear in this

// in order to do this 
// this.var = val