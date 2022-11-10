const scanner = require("readline-sync");

let price, salesTax, total;



price = scanner.question("Berapa gaji anda ?")
let con_price = parseFloat(price)
salesTax = con_price * 0.0825;
total = con_price + salesTax;

console.log("Item price:\t" + price);
console.log("Sales tax:\t" + salesTax);
console.log("Total cost:\t" + total);
console.log(Math.floor(11*Math.random()))