var readlineSync = require('readline-sync');
var name = readlineSync.question('What city is the capital of France? ')
console.log(typeof name)

var price = 0, salesTax, total;



price = readlineSync.question('How much is the purchase price?');

salesTax = price * 0.0825; 
total = price + salesTax;
console.log( "Item price:\t" + price );
console.log( "Sales tax:\t" + salesTax );
console.log( "Total cost:\t" + total );

//variable modification
var i, j, k;

i = 5;
j = 5;
k = 5;
console.log( "i: " + i + "\tj: " + j + "\tk: " + k );
i = i + 3;
j = j - 3;
k = k * 3;
console.log( "i: " + i + "\tj: " + j + "\tk: " + k + "\n" );

//Comparing Strings

var word;
var yep, nope;
word = readlineSync.question("Type the word \"weasel\", please.\n");
yep = (word == "weasel");
nope = (word != "weasel");
console.log( "You typed what was requested: " + yep );
console.log( "You ignored polite instructions: " + nope );

var MAX = 100, MIN = 0, value = 50, key;
console.log('\n\n' + (new Array(20)).join(' ') +
  '[Z] <- -> [X]  FIX: [SPACE]\n');
while (true) {
  console.log('\x1B[1A\x1B[K|' +
    (new Array(value + 1)).join('-') + 'O' +
    (new Array(MAX - value + 1)).join('-') + '| ' + value);
  key = readlineSync.keyIn('',
    {hideEchoBack: true, mask: '', limit: 'zx '});
  if (key === 'z') { if (value > MIN) { value--; } }
  else if (key === 'x') { if (value < MAX) { value++; } }
  else { break; }
}
console.log('\nA value the user requested: ' + value);