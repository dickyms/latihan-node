let roll, total;
total = 0;

do {
    roll = 1 + Math.floor(Math.random()*6)
    console.log( "Computer rolled a " + roll + "." );
    if ( roll == 1 ) { 
        console.log( "\tThat ends its turn." );
        total = 0;
    } else { 
        total += roll; 
        console.log( "\tComputer has " + total );
        console.log( " points so far this round.\n" ); if ( total < 20 ) {
            console.log( "\tComputer will roll again." );
        }
    }
} while (roll != 1 && total < 20)

console.log("Computer ends the round with " + total + " points.");
