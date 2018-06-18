(function test() {

    if (true) {
        var var1 = "this is var";
        let var2 = "this is let";
        const var3 = "this is const";
    }
    
    console.log(var1); // displayable

    try {
        console.log(var2); // error
    } catch(e) {
        console.log('no var2!');
    }

    try {
        console.log(var3); // error
    } catch(e) {
        console.log('no var3!');
    }


})();