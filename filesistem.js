const fs = require('fs');

let msg = "+------------------------+\n"
        + "+                        +\n"
        + "+       CORNER STORE     +\n"
        + "+                        +\n"
        + "+ 2020-04-21    11:50AM  +\n"
        + "+                        +\n"
        + "+ Galons:        12.464  +\n"
        + "+ Price:          3.642  +\n"
        + "+------------------------+\n"
        + "+ Fuel Total:    $21.99  +\n"
        + "+------------------------+\n"


fs.writeFile("Output.txt", msg, (err) => {
    if (err) throw err;
})