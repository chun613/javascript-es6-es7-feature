var obj = { a: "1", b: "2", c: "3", d: "4", e: "5"};
var {a, b, ...rest} = obj;
console.log(a);
console.log(b);
console.log(rest);
var newObj = {a, b, ...rest};
console.log(newObj);

