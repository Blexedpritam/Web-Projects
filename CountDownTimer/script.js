const endDate = new Date("7 july , 2026 20:00:00").getTime();
const startDate = new Date().getTime();



let x = setInterval(function updateTimer() {
    const now = new Date().getTime();

    const distanceCovered = now - startDate; // Time --> mili seconds
    const distancePending = endDate - now ;

    //Calculate days , min , hrs , secs
    // 1 day = 24 * 60 * 60 * 1000ms  
    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHrsInMillis = (60 * 60 * 1000);
    const oneMinsInMillis = (60 * 1000);
    const oneSecInMillis = (1000);

    const days = Math.floor(distancePending / (oneDayInMillis));
    const hrs = Math.floor((distancePending %(oneDayInMillis) / (oneHrsInMillis )));
    const mins = Math.floor((distancePending % (oneHrsInMillis)) / (oneMinsInMillis));
    const secs = Math.floor((distancePending % (oneMinsInMillis))/(oneSecInMillis));

    //Populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    //Calculate witdh percentage for progress bar 
    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered/totalDistance)*100;
    
    //Set width for Progress bar 
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";

    }
    
},1000);