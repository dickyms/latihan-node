for ( var s = 1 ; s <= 100 ; s++ ) { 
    for ( var g = 1 ; g <= 100 ; g++ ) {
         for ( var c = 1 ; c <= 100 ; c++ ) { 
            if ( s+g+c == 100 && 10.00*s + 3.50*g + 0.50*c == 100.00 ) { 
                console.log( s + " sheep, " + g + " goats, and " + c + " chickens." );
             } 
         }
        }
    }