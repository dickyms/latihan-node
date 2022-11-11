console.log("Here");
sayHello();
console.log(returnValue("sds"));

function sayHello () {
    console.log("Hello from function")
}

function returnValue (sd) {
    let result = 0;
    result = Math.sqrt(sd)
    return result
}

const readlineSync = require("readline-sync")

console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n");
console.log("1) Triangle");
console.log("2) Circle");
console.log("3) Rectangle");
console.log("4) Quit");
choice = readlineSync.question("> ");