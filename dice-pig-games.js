const scanner = require("readline-sync");
let roll, ptot, ctot, turnTotal;
let choice = "";

ptot = 0;
ctot = 0;

do {
    turnTotal = 0;
    console.log( "You have " + ptot + " points." );
    do {
        roll = 1 + Math.floor(Math.random()*6);
        console.log( "\tYou rolled a " + roll + "." );
        if ( roll == 1 ) {
            console.log( "\tThat ends your turn." );
            turnTotal = 0;
        } else {
            turnTotal += roll;
            console.log( "\tYou have " + turnTotal + " points" );
            console.log( " so far this round.\n" );
            console.log( "\tWould you like to \"roll\" again" );
            choice = scanner.question( " or \"hold\"? " );
        }
    } while ( roll != 1 && choice == "roll" );
    ptot += turnTotal;
    console.log("\tYou end the round with " + ptot + " points.");

    if (ptot < 100) {
        turnTotal = 0;
        console.log( "Computer has " + ctot + " points." );
        do {
            roll = 1 + Math.floor(Math.random()*6);
            console.log( "\tComputer rolled a " + roll + "." );
            if ( roll == 1 ) {
                console.log( "\tThat ends your turn." );
                turnTotal = 0;
            } else {
                turnTotal += roll;
                console.log( "\tComputer has " + turnTotal + " points" );
                console.log( " so far this round.\n" );
                if (turnTotal < 20) {
                    console.log("\tComputer will roll again.");
                }
            }
        }while ( roll != 1 && turnTotal < 20 );

        ctot += turnTotal;
        console.log( "\tComputer ends the round with " );
        console.log( ctot + " points.\n" );
    }
} while ( ptot < 100 && ctot < 100 );

if (ptot > ctot) {
    console.log( "Humanity wins!" );
} else {
    console.log( "The computer wins." );
}