var countDownDate = new Date("Mar 26, 2020 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("provenancecountdwn").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";
    document.getElementById("provenancecountdwn").style.color = "black";
    document.getElementById("provenancecountdwn").style.fontWeight = "400";



    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("provenancecountdwn").innerHTML = "EXPIRED";
    }
}, 1000);