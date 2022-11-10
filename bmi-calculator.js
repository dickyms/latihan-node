const read = require('readLine-sync');

let m, kg, bmi;

m = read.question("Berapa berat badanmu ?");
kg = read.question("berapa tinggi badan kamu ?");
bmi = kg / (m*m);
console.log("your BMI is " + bmi)