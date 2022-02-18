var countDownDate = new Date( "Dec 23, 2022 08:00:00" ).getTime();
var now = new Date().getTime();
var distance = countDownDate - now;

function daysLeft() {
    setInterval( function() {
        var days = Math.floor( distance / ( 1000 * 60 * 60 * 24 ) );

        document.getElementById( "daysLeft" ).innerHTML = days + " days left";

        if( distance < 0 ) {
            clearInterval();
            document.getElementById( "daysLeft" ).innerHTML = "Website going Live in only a Couple of Days";
        }
    }, 1000 );
} 

function hoursLeft() {
    setInterval( function() {
        var hours = Math.floor( distance / 3600 );

        document.getElementById( "hoursLeft" ).innerHTML = hours + " hours left";

        if( distance < 0 ) {
            clearInterval();
            document.getElementById( "hoursLeft" ).innerHTML = "Website going Live in only a Couple of Hours";
        }
    }, 1000 );
} 

function minutesLeft() {
    setInterval( function() {
        var minutes = Math.floor( distance / 60 );

        document.getElementById( "minutesLeft" ).innerHTML = minutes + " minutes left";

        if( distance < 0 ) {
            clearInterval();
            document.getElementById( "minutesLeft" ).innerHTML = "Website going Live in only a Couple of Minutes";
        }
    }, 1000 );
} 

// function secondsLeft() {
//     var x = setInterval( function() {
//         var seconds = Math.floor( distance );
//         document.getElementById( "secondsLeft" ).innerHTML = seconds + " seconds left";

//         if( distance < 0 ) {
//             clearInterval( x );
//             document.getElementById( "secondsLeft" ).innerHTML = "Website going Live in only a Couple of Minutes";
//         }
//     }, 1000 );
// } 


function secondsLeft() {
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var seconds = Math.floor(distance / 10000);
      
        document.getElementById("secondsLeft").innerHTML = seconds + " s ";
      
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("secondsLeft").innerHTML = "Website going Live in only a Couple of Minutes";
        }
      }, 00);
      
}

// 
// var minutes = 
// var seconds = Math.floor((distance % (1000 * 60)) / 1000);