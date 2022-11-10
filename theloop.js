const scanner = require("readline-sync");

let pin, entry;

pin = 12345;

console.log("WELCOME TO THE BANK OF JAVASCRIPT."); 
entry = scanner.question("ENTER YOUR PIN: ");

while ( entry != pin ) { 
    console.log("\nINCORRECT PIN. TRY AGAIN.");
    entry = scanner.question("ENTER YOUR PIN: ");
    console.log(parseInt(entry));
}

console.log("\nPIN ACCEPTED. YOUR ACCOUNT BALANCE IS $425.17");